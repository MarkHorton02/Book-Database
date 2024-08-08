const express = require("express");
const connectDB = require("../db/connection");
const bookRoutes = require("../db/routes/bookroutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

connectDB();

app.use(express.json());

app.use("/api/books", bookRoutes);

app.post("/api/books/add", async (req, res) => {
  try {
    const { title, author, genre, publishedYear } = req.body;
    const book = new Book({ title, author, genre, publishedYear });
    await book.save();
    res.status(201).json({ message: `Book ${title} has been added`, book });
  } catch (error) {
    res
      .status(400)
      .json({ message: `Book cannot be added`, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});