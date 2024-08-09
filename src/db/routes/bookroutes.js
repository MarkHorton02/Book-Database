const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookcontroller");

router.get("/listbooks", bookController.listBooks);
router.put("/updateBooks", bookController.updateBooks);
router.delete("/removeBooks", bookController.delBook);
router.post("/addBooks", bookController.addBook);

module.exports = router;