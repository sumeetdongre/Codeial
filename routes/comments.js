const express = require('express');
const router = express.Router();
const passport=require('passport');
const CommentController=require('../controllers/comments_controller');

router.post('/create',passport.checkAuthentication,CommentController.create);



module.exports=router;