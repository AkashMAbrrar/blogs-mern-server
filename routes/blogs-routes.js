import express from 'express';
import { addBlogs, getAllBlogs, updateBlog } from '../controller/blog-controller';
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlogs);
blogRouter.put("/update/:id", updateBlog);

export default blogRouter;