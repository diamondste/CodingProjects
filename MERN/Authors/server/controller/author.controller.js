const Author = require('../models/author.model');

module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}
module.exports.createAuthor =  (request, response) => {
        const {name} = request.body;
        Author.create({
            name: name
        })
            .then(newAuthor => response.json(newAuthor))
            .catch(err => response.status(400).json(err));
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body,
{new:true})
    .then(editAuthor => response.json(editAuthor))
    .catch(err => response.json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({_id: request.params.id})
    .then(deleteConfrim => response.json(deleteConfrim))
    .catch(err => response.json(err))
}

