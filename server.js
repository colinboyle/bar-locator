const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const users = require("./api/users");
const profile = require("./api/profile");
//const locations = require("./api/locations");

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = process.env.mongoURI || require("./config/keys").mongoURI;

//Connect DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//Static file declaration
app.use(express.static(path.join(__dirname, "client/build")));

//routes
app.use("/api/users", users);
app.use("/api/profile", profile);
//app.use("/api/locations", locations);

//production mode
if (process.env.NODE_ENV === "production") {
  //app.use(express.static(path.join(__dirname, "client/build")));
  app.use(express.static("client/build"));
  //
  //app.get("*", (req, res) => {
  //  res.sendfile(path.join((__dirname = "client/build/index.html")));
  //});
  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//build mode
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

const port = process.env.PORT || 5100;

app.listen(port, () => console.log(`Server running on ${port}`));
