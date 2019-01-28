const db = require("../models");

module.exports = {
    findAll: function( req, res){
        db.Book.find().then( dbModel => res.json(dbModel)).catch(err => res.status(442).json(err));
    },
    create: function(req, res){
        db.Book.create(req.body).then(dbModel => res.json(dbModel)).catch(err => res.status(442).json(err));
    },
    remove: function(req, res){
        db.Book.remove({book_id: req.params.id}).then(dbModel => res.json(dbModel)).catch(err => res.status(442).json(err));
    },
    findById: function(req, res) {
        db.Book.findById(req.params.id)
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      },

      update: function(req, res) {
        db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      },


}