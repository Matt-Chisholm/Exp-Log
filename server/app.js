const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const authRoutes = require("./auth"); // Import your authentication routes
const registerRoutes = require("./register"); // Import your registration routes

app.use("/auth", authRoutes); // Mount the authentication routes
app.use("/register", registerRoutes); // Mount the registration routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
