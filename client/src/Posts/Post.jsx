import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";


export default function Post({ post, fetchPostsList }) {

    async function handleDeleteBtn(id) {
        try {
            let response = await axios.delete(`http://localhost:8888/posts/${id}`, { withCredentials: true });
            if (response.status == 200) {
                await fetchPostsList();
                console.log(response.data.message);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.log("Error => " + error);
        }
    }

    return <>
        <div className="flex flex-row justify-between gap-2 bg-gray-900 rounded-lg p-6 shadow-lg border border-red-800 post-glow transition duration-300">



            <div className='flex flex-col'>
                <div className="text-gray-400">{post.content}</div>
                <div className="text-xs text-red-500 font-bold mb-2 font-['Black And hite Picture']">~ @Anonymous</div>
            </div>

            <div className="second flex flex-col">
                <div className="text-xs text-white font-bold mb-2 font-['Black And hite Picture']">{new Date(post.createdAt).toLocaleDateString("en-IN")}</div>
                <div className="flex justify-end">
                    <button className="flex justify-center items-center h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800">
                        <MdEdit className="h-4 w-4" />
                        <span className="sr-only">Edit post</span>
                    </button>

                    <button className="flex justify-center items-center h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800" onClick={()=>handleDeleteBtn(post._id)}>
                        <FaTrash className="h-4 w-4" />
                        <span className="sr-only">Delete post</span>
                    </button>
                </div>
            </div>

        </div>
    </>
}