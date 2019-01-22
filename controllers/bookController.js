const db = require("../models/book");

module.exports = {
    findAll: function( req, res){
        db.Book.find(req.query).sort({date: -1}).then( dbModel => res.json(dbModel)).catch(err => res.status(442).json(err));
    },
    create: function(req, res){
        db.Book.create(req.body).then(dbModel => res.json(dbModel)).catch(err => res.status(442).json(err) )
    },
    remove: function(req, res){
        db.Book.remove({book_id: req.params.id}).then(dbModel.remove()).then(dbMode => res.json(dbMode)).catch(err => res.status(442).json(err));
    }


}