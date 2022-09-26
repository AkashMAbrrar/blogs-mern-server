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
};

// controller for create blogs 
export const addBlogs = async (req, res, next) => {
    const { title, description, image, user } = req.body;
    const blog = new Blog({
        title,
        description,
        image,
        user
    });
    try {
        await blog.save()
    } catch (error) {
        return console.log(error);
    }
    return res.status(200).json({ blog })
}