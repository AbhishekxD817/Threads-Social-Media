
import Post from "../models/post-model.js"

export const allPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        return res.status(200).json({ posts });
    } catch (error) {
        const { message = "An error ocurred while fetching all posts from db" } = error;
        return res.status(500).json({ message });
    }
}
export const createPost = async (req, res, next) => {
    try {
        let { content, owner } = req.body;
        let newPost = new Post({
            content,
            owner
        })
        await newPost.save();
        return res.status(200).json({ message: "post created successfully" });
    } catch (error) {
        let { message = "Some error ocurred while fetching data from db" } = error;
        return res.status(500).json({ message });
    }
}
export const readPost = async (req, res, next) => {
    try {
        let { id } = req.params;
        let post = await Post.findById(id);
        return res.status(200).json({ post });
    } catch (error) {
        let { message = "Some error ocurred while fetching data from db" } = error;
        return res.status(500).json({ message });
    }
}
export const updatePost = async (req, res, next) => {
    try {
        let { id } = req.params;
        let { content } = req.body;

        let post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({
                message: "post not found"
            })
        }

        post.content = content;
        await post.save();
        return res.status(200).json({ message: "post updated successfully" });

    } catch (error) {
        let { message = "Some error ocurred while fetching data from db" } = error;
        return res.status(500).json({ message });
    }
}


// post deletion is not allowed because 
// there is no authentication right now in our app
// but we write a example post delete here, which we are not going to use
// export const deletePost = async (req, res, next) => {
//     try {
//         let { id } = req.params;
//         let post = await Post.findByIdAndDelete(id);
//         return res.status(200).json({ message: "Post deleted successfully" });
//     } catch (error) {
//         let { message = "Some error ocurred while fetching data from db" } = error;
//         return res.status(500).json({ message });
//     }
// }