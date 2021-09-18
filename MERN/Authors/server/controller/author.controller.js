const Author = require('../models/author.model');
module.exports.createAuthor = (request, response) => {
    const {authorName} = request.body;
    Author.create({
        authorName
    })
        .then(author => response.json(author))
        .catch(err => response.json(err));
}
