const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const posts = await Post.getPosts();
      res.send(posts);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/create', async (req, res) => {
    try {
      const post = await Post.create(req.body);
      console.log(post)
      res.send({...post, contents})
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await Post.deletePost(req.body.postId);
      res.send({success: "Post Deleted"});
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

module.exports = router;