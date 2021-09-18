const AuthorController = require('../controller/author.controller');
module.exports = function(app){
    app.post('/api/author', AuthorController.createAuthor);
}
