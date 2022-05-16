const express = require('express');
const Follow = require('../models/following');
const router = express.Router();
router
  .get('/', async (req, res) => {
    try {
      const follows = await Follow.getFollows();
      res.send(follows);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/add', async (req, res) => {
    try {
      const follow = await Follow.addFollow(req.body);
      console.log(follow)
      res.send({...follow, count})
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

  .delete('/remove', async (req, res) => {
    try {
      await Follow.removeFollow(req.body.followId);
      res.send({success: "Follow Removed"});
    } catch(error) {
      res.status(401).send({message: error.message});
    }
  })

module.exports = router;