const router = require("express").Router();
const bookController = require("../../controllers/bookController");

//for receiving and rendering saved books
router.route("/getAll")
.get(bookController.findAll)
.post(booksController.create);

router.post("/api/books/", function (req, res){
    bookController.create(req.body)
        .then(dbBook => res.json(dbBook));

});


//route for deleting a specified book
router.route("/:id")
    .delete(booksController.remove);

module.exports = router;