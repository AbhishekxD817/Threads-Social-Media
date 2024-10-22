import axios from "axios";
import { useForm } from "react-hook-form"



export default function EditPost({ post, fetchPostsList, toggleEditPost }) {
    const { register, handleSubmit, reset } = useForm();

    async function handleUpdatePost(data) {
        try {
            let response = await axios.patch(`http://localhost:8888/posts/${post._id}`, data, { withCredentials: true });
            if (response.status == 200) {
                await fetchPostsList();
                toggleEditPost(false);
                return;
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.log("ERROR => ", error.response.data.message);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleUpdatePost)} className="">
                <textarea {...register("content")} className="w-full bg-gray-800 text-red-500 rounded p-2 mb-4" rows={4} placeholder="What haunts your mind?">{post.content}</textarea>
                <button type='submit' className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded glow transition duration-300">Update Post</button>
            </form>
        </>
    )
}