const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const users = [{ id: 1, username: "admin", password: "120" }];

passport.use(
  new LocalStrategy(function (username, password, done) {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (!user) {
      return done(null, false, { message: "Incorrect username or password." });
    }
    return done(null, user);
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  const user = users.find((u) => u.id === id);
  done(null, user);
});

const app = express();
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("publik"));

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/publik/login.html");
});

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  function (req, res) {
    res.redirect("/publik/admin.html");
  }
);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
