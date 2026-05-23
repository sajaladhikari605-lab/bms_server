const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    blogtitle: {
        type: String,
        required: true
    },
    blogsubtitle: {
        type: String,
        required: true
    },
    blogdescription: {
        type: String,
        required: true
    }
});

const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;