const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./api/users");

const profile = require("./api/profile");
//const locations = require("./api/locations");

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//routes
app.use("/api/users", users);
app.use("/api/profile", profile);
//app.use("/api/locations", locations);

const port = 5100; //process.env.PORT || 5100;

app.listen(port, () => console.log(`Server running on ${port}`));
