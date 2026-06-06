const { createblog, getblog, updateBlog, deleteBlog, getSinglBlog } = require('../controller/blogcontroller');



const router = require('express').Router();

router.route("/blogs").post(createblog).get(getblog);
router.route("/blogs/:id").get( getSinglBlog).patch(updateBlog).delete(deleteBlog)

module.exports = router;