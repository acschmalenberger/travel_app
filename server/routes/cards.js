const router = require("express").Router();
const cardsController = require("../controllers/cardsController");
const authController = require('../controllers/auth');


// Matches with "/api/books"
router.route("/")
  .get(cardsController.findAll)
  .post(cardsController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(cardsController.findById)
//   .put(cardsController.update)
//   .delete(cardsController.remove);
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
