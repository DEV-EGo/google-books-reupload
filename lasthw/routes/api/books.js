const router = require("express").Router();
const booksControllSystem = require("../../controllers/booksControllSystem");

// Matches with "/api/books"
router.route("/")
  .get(booksControllSystem.findAll)
  .post(booksControllSystem.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksControllSystem.findById)
  .put(booksControllSystem.update)
  .delete(booksControllSystem.remove);

module.exports = router;
