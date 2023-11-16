//create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//handle request
router.get('/', commentController.comment_list);
router.get('/:id', commentController.comment_detail);
router.post('/', commentController.comment_create);
router.put('/:id', commentController.comment_update);
router.delete('/:id', commentController.comment_delete);

