// auth.js
const express = require("express");
const router = express.Router();

// Define the login route handler
router.post("/login", (req, res) => {
  // Implement your login logic here
  console.log(req.body);
  res.send("Login successful");
});

module.exports = router;
