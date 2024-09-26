const { Post } = require("../db");

const createPost = async (title, body, userId) => {
  const newPost = await Post.create({ title, body });
  await newPost.setUser(userId);
  return newPost;
};

const getAllPost = async () => {
  const posts = await Post.findAll();
  return posts;
};

module.exports = {
  createPost,
  getAllPost,
};
