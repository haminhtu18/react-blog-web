import express from 'express'
import { getPosts, createPosts, updatePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts)

//http:://localhost:5000/posts

router.post('/', createPosts)

router.post('update', updatePost)

export default router