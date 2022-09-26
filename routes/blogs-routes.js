import express from 'express';
import { addBlogs, deleteBlog, getAllBlogs, getById, updateBlog } from '../controller/blog-controller';
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlogs);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);

export default blogRouter;