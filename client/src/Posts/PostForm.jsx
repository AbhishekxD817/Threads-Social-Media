import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function PostForm({ fetchPostsList }) {

    const { handleSubmit, register, reset } = useForm();

    async function handlePostSubmit(data) {
        try {
            console.log(data);
            const response = await axios.post("http://localhost:8888/posts", data, { withCredentials: true });
            if (response.status == 200) {
                console.log(response.data.message);
                reset();
                await fetchPostsList();
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return <>
        <form onSubmit={handleSubmit(handlePostSubmit)}>
            <textarea {...register("content")} className="w-full bg-gray-800 text-red-500 rounded p-2 mb-4" rows={4} placeholder="What haunts your mind?"></textarea>
            <button type='submit' className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded glow transition duration-300">Post to the Void</button>
        </form>
    </>
}