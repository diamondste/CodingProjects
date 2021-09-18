const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        minlength: [3, "Author Name must be at least 3 characters long"]
    
    }
});
module.exports = mongoose.model('Author', AuthorSchema);
