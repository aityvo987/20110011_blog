const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.use(express.json());

router.get('/', postController.getPosts)
router.post('/', postController.addPost)
router.put('/:postId', postController.updatePost)
router.delete('/:postId', postController.removePost)
module.exports = router;
