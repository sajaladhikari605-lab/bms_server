const Blog = require("../model/blogmodel");


// control create blog
const createblog = async (req, res) => {
    try {
        const blogtitle = req.body.blogtitle;
        const blogsubtitle = req.body.blogsubtitle;
        const blogdescription = req.body.blogdescription;

        if (!blogtitle || !blogsubtitle || !blogdescription) {
            return res.status(400).json({
                message: "All fields required"
            });
        }

        await Blog.create({
            blogtitle: blogtitle,
            blogsubtitle: blogsubtitle,
            blogdescription: blogdescription
        });

        res.status(200).json({ message: 'Blog created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating blog', error: error.message });
    }
};

// get all blogs
const getblog = async (req, res) => {
    const blogs = await Blog.find()
    res.status(200).json({
        message: "Blogs retrieved successfully",
        data: blogs
    })
}

// gte single bolg
const getSinglBlog = async (req, res) => {
    const id = req.params.id
    const singleBlog = await Blog.findById(id)
    if (!singleBlog) {
        return res.status(400).json({
            message: "Blog not found"
        })
    }
    res.status(200).json({
        message: "single blog get sucessfuly",
        data: singleBlog
    })
}
// delete blog
const deleteBlog  = async (req, res) => {
    const id = req.params.id;
    await Blog.findByIdAndDelete(id);
    res.status(200).json({
        message: "blog deleted"
    });
}
// update blog
const updateBlog = async (req, res) => {
    const id = req.params.id
    const blogtitle = req.body.blogtitle
    const blogsubtitle = req.body.blogsubtitle
    const blogdescription = req.body.blogdescription

    if (!blogtitle || !blogsubtitle || !blogdescription) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    await Blog.findByIdAndUpdate(id, {
        blogtitle,
        blogsubtitle,
        blogdescription
    })

    res.status(200).json({
        message: "Blog updated successfully"
    })
}

module.exports = {
    createblog,
    getblog,
    getSinglBlog,
    deleteBlog,
    updateBlog
}
