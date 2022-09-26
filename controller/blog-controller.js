import Blog from "../models/Blog";

export const getAllBlogs = async (req, res, next) => {
    let blogs;

    try {
        blogs = await Blog.find();
    } catch (error) {
        console.log(error)
    }
    if (!blogs) {
        return res.status(404).json({ message: "Blogs Not Found" })
    }
    return res.status(200).json({ blogs })
}