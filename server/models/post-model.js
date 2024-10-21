import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    content: {
        type: String,
        maxLength: 50,
        minLength: 2,
        required: true
    }
},{timestamps:true})


const Post = mongoose.model("Post",postSchema);

export default Post;
