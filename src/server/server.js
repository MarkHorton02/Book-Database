const express = require("express");
const connectDB = require("../db/connection");
const bookRoutes = require("../db/routes/bookroutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

connectDB();

app.use(express.json());
app.use("/api/books", bookRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});