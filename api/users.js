const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const request = require("request");

//const keys = require("../config/keys");

const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");
const validateNewsletterInput = require("../validation/newsletter");

const NewsletterUser = require("../models/NewsletterUser");
const User = require("../models/User");

//@route    GET api/users/test
//@desc     Tests user route
//@access   Public
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

//@route    GET api/users/newsletter
//@desc     Register newsletter user
//@access   Public
router.post("/newsletter", (req, res) => {
  const { errors, isValid } = validateNewsletterInput(req.body);
  const { email } = req.body; // firstName, lastName } = req.body;
  if (!isValid) {
    return res.status(400).json(errors);
  }
  //Newsletter.findOne({ email: req.body.email }).then(user => {
  //  if (user) {
  //    errors.email = "You are already registered";
  //    return res.status(404).json(errors);
  //  } else {
  //    const newNewsletterUser = new NewsletterUser({
  //      email: req.body.email
  //    });
  //    newNewsletterUser
  //      .save()
  //      .then(user => res.json(user))
  //      .catch(err => console.log(err));
  //  }
  //});
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed"
        //merge_fields: {
        //  FNAME: firstName,
        //  LNAME: lastName
        //}
      }
    ]
  };

  const postData = JSON.stringify(data);

  const mailChimpKey =
    process.env.mailChimpKey || require("../config/keys").MailChimpAPIKey;

  const options = {
    url: "https://us20.api.mailchimp.com/3.0/lists/fd4474e11a",
    method: "POST",
    user: "AlexNDevAcct@gmail.com: " + mailChimpKey,
    headers: {
      "content-type": "application/json",
      Authorization: "apikey " + mailChimpKey
    },
    body: postData
  };

  request(options, (err, response, options) => {
    if (err) {
      const errors = { email: err };
      res.status(400).json(errors);
    } else {
      if (response.statusCode === 200) {
        const errors = { status: 200, ...response };
        res.status(400).json(errors);
      } else {
        const errors = { ...response };
        res.status(400).json(errors);
      }
    }
  });
});

//@route    GET api/users/register
//@desc     Register user
//@access   Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "User already exists";
      return res.status(404).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//@route    GET api/users/login
//@desc     Login user / returning jwt
//@access   Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, name: user.name };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 7200 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

//@route    GET api/user
//@desc     Edit user
//@access   Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //const { errors, isValid } = validateProfileInput(req.body);

    //if (!isValid) {
    //  return res.status(400).json(errors);
    //}

    //Get fields
    var userFields = {};
    //profileFields.user = req.user.id;
    if (req.body.name) userFields.name = req.body.name;
    console.log(req.user.id);

    Profile.findOne({ user: req.user.id }).then(user => {
      if (user) {
        //Update
        User.findOneAndUpdate(
          { _id: req.user.id },
          { $set: userFields },
          { new: true }
        )
          .then(user => {
            console.log(user);
            return res.json(user);
          })
          .catch(err => {
            return res
              .status(404)
              .json({ user: "Unable to update user... " + err });
          });
      } else {
        res.status(404).json({ user: "No user found..." });
      }
    });
  }
);

//@route    GET api/users/current
//@desc     Return current user
//@access   Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.id,
      name: req.name,
      email: req.email
    });
  }
);

module.exports = router;
