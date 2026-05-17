const express = require("express");
const app = express();

// Q1 - Global middleware
function logger(req, res, next) {
  console.log(req.method);
  console.log(req.path);
  console.log(req.query);
  console.log(new Date().toISOString());

  next();
}

app.use(logger);

// Q2 - Route middleware
function validateCredits(req, res, next) {
  const minCredits = req.query.minCredits;
  const maxCredits = req.query.maxCredits;

  // Check integer
  if (minCredits && isNaN(minCredits)) {
    return res.status(400).send("minCredits must be an integer");
  }

  if (maxCredits && isNaN(maxCredits)) {
    return res.status(400).send("maxCredits must be an integer");
  }

  // Check min > max
  if (minCredits && maxCredits) {
    if (parseInt(minCredits) > parseInt(maxCredits)) {
      return res
        .status(400)
        .send("minCredits cannot be greater than maxCredits");
    }
  }

  next();
}

// Route
app.get("/departments/:dept/courses", validateCredits, (req, res) => {
  res.send("Course route works");
});

app.listen(3000);
