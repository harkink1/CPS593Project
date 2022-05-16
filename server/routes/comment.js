const express = require('express');
const Comment = require('../models/comment');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const comments = await Comment.getComments();
      res.send(comments);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/create', async (req, res) => {
    try {
      const comment = await Comment.createComment(req.body);
      console.log(comment)
      res.send(contents)
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await Comment.deleteComment(req.body.commentId);
      res.send({success: "Comment Deleted"});
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

module.exports = router;