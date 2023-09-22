const express = require('express');
const {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogControllers');
const router = express.Router();
router.route('/').post(createBlog).get(getAllBlogs);
router.route('/:id').put(updateBlog).delete(deleteBlog);

module.exports = router;
