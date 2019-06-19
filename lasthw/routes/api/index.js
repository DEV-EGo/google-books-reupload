const router = require("express").Router();
const RoutesForBooks = require("./books");

// Book routes
router.use("/books", RoutesForBooks);

module.exports = router;
