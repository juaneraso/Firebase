const { createPost, getAllPost } = require("../controllers/postsController");

const postCreateHandler = async (req, res) => {
  const { title, body, userId } = req.body;
  try {
    const newPost = await createPost(title, body, userId);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPostHandler = async (req, res) => {
  try {
    const posts = await getAllPost();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postCreateHandler,
  getPostHandler,
};
