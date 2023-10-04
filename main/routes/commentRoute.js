const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.use(express.json());
router.post('/', commentController.addComment)
module.exports = router;
