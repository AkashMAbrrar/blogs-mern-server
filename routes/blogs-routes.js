import express from 'express';
import { addBlogs, getAllBlogs } from '../controller/blog-controller';
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlogs);
blogRouter.put("/update",)

export default blogRouter;