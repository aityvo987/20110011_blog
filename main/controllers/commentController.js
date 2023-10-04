const posts = require('../models/posts');

exports.addComment= (req, res) => {
  const postId = req.params.postId;
  const { comment } = req.body;

  if (!comment) {
    return res.status(400).json({ message: 'Comment cannot be empty' });
  }

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  post.comments.push(comment);

  res.status(200).json({ message: 'Comment added successfully', post });
};
