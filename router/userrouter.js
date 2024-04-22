const express = require('express');
const router = express.Router();
const rg = require('../service/userservice');

const post = require("../service/postservice")


router.post('/api/registration', rg.rgservice);
router.post('/api/loging', rg.login);

router.post('/api/post', post.posts);
router.get('/api/post/data/:Fname', post.posts_get);
router.post('/api/post/update/:id', post.postupdate);
router.get('/api/post/count/:Fname', post.post_count)

module.exports = router;

