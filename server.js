const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { dot } = require("node:test/reporters");

// env configration
dotenv.config();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes

app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));

// port
const PORT = process.env.PORT || 5174;

// listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
