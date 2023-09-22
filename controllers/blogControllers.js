const blogModel = require('../schemas/blogSchema');

const createBlog = async (req, res) => {
  const { title, description, content } = req.body;
  try {
    const newBlog = new blogModel({ title, description, content });
    await newBlog.save();
    res.json({ message: 'Successful', data: newBlog });
  } catch (error) {
    console.log(error.message);
    res.send({ message: 'Unsuccessful' });
  }
};
const getAllBlogs = async (req, res) => {
  try {
    const allPosts = await blogModel.find();
    res.send({ message: 'Successful', data: allPosts });
  } catch (error) {
    console.log(error.message);

    res.send({ message: 'Get all blogs: Unsuccessful' });
  }
};
const updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBlog = await blogModel.findByIdAndUpdate(id, req.body);
    res.json({ message: 'Successful', data: updatedBlog });
  } catch (error) {
    console.log(error.message);

    res.send({ message: 'Delete: Unsuccessful' });
  }
};
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await blogModel.findByIdAndDelete(id);
    res.json({ message: 'Successfully deleted', data: deletedBlog });
  } catch (error) {
    console.log(error);
    res.json({ message: 'Delete unsuccessful' });
  }
};

module.exports = { createBlog, getAllBlogs, updateBlog, deleteBlog };
