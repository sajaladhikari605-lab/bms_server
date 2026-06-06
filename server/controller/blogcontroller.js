const Blog = require("../model/blogmodel")

// control create blog
const createblog = async (req, res) => {
  try {
    const { blogtitle, blogsubtitle, blogdescription } = req.body

    if (!blogtitle || !blogsubtitle || !blogdescription) {
      return res.status(400).json({
        message: "All fields required",
      })
    }

    const createdBlog = await Blog.create({
      blogtitle,
      blogsubtitle,
      blogdescription,
    })

    res.status(201).json({
      message: "Blog created successfully",
      data: createdBlog,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error creating blog", error: error.message })
  }
}

// get all blogs
const getblog = async (req, res) => {
  try {
    const blogs = await Blog.find()
    res.status(200).json({
      message: "Blogs retrieved successfully",
      data: blogs,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Unable to retrieve blogs", error: error.message })
  }
}

// get single blog
const getSinglBlog = async (req, res) => {
  try {
    const id = req.params.id
    const singleBlog = await Blog.findById(id)
    if (!singleBlog) {
      return res.status(404).json({
        message: "Blog not found",
      })
    }
    res.status(200).json({
      message: "Single blog retrieved successfully",
      data: singleBlog,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Unable to retrieve blog", error: error.message })
  }
}

// delete blog
const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id
    const deletedBlog = await Blog.findByIdAndDelete(id)
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" })
    }
    res.status(200).json({
      message: "Blog deleted successfully",
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Unable to delete blog", error: error.message })
  }
}

// update blog
const updateBlog = async (req, res) => {
  try {
    const id = req.params.id
    const { blogtitle, blogsubtitle, blogdescription } = req.body

    if (!blogtitle || !blogsubtitle || !blogdescription) {
      return res.status(400).json({
        message: "All fields are required",
      })
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        blogtitle,
        blogsubtitle,
        blogdescription,
      },
      { new: true }
    )

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" })
    }

    res.status(200).json({
      message: "Blog updated successfully",
      data: updatedBlog,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Unable to update blog", error: error.message })
  }
}

module.exports = {
  createblog,
  getblog,
  getSinglBlog,
  deleteBlog,
  updateBlog,
}
