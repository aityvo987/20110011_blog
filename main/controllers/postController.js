const posts = require('../models/posts');

exports.getPosts= (req, res) =>{
  res.render('home', {posts})
},
exports.addPost= (req, res) => {

  const { name, text} = req.body;
  if (!name || !text ) {
    return res.status(400).json({ message: 'Missing required data' });
  }
  const post = { name, text };
  posts.push(post);
  res.status(201).json({ message: 'Post created successfully', post });

},
exports.updatePost= (req, res) =>{
  const postId = req.params.id;
  const { name, text, } = req.body;

  // Find the post by ID and update its properties
  // Here, you would typically use a database query to find and update the post
  // For simplicity, let's assume we have an array of posts stored in memory
  const post = posts.find((p) => p.id === postId);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  post.name=name
  post.text = text;
  post.comments=post.comments;

  // Return a response indicating the successful update of the post
  res.json({ message: 'Post updated successfully', post });
},
exports.removePost= (req, res) => {
   // Retrieve the post ID from the request parameters
   const postId = req.params.id;

   // Find the post by ID and remove it
   // Here, you would typically use a database query to find and delete the post
   // For simplicity, let's assume we have an array of posts stored in memory
   const index = posts.findIndex((p) => p.id === postId);
   if (index === -1) {
     return res.status(404).json({ error: 'Post not found' });
   }
 
   const deletedPost = posts.splice(index, 1)[0];
 
   // Return a response indicating the successful deletion of the post
   res.json({ message: 'Post deleted successfully', post: deletedPost });
}