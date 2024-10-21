import { useEffect, useState } from "react";
import PostForm from "../Posts/PostForm";
import PostsSection from "../Posts/PostsSection";
import axios from "axios";

export default function MainSection() {

    const [postsList, setPostsList] = useState([]);

    async function fetchPostsList() {
        try {
            let response = await axios.get("http://localhost:8888/posts", { withCredentials: true });
            if (response.status == 200) {
                console.log(response)
                setPostsList(response.data.posts);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.log("Error => " + error);
        }
    }

    useEffect(() => {
        (async function () {
            await fetchPostsList();
        })()
    }, [])


    return (
        <main>
            <div className="bg-gray-900 rounded-lg p-6 mb-8 shadow-lg border border-red-800">
                <h2 className="text-2xl text-black font-bold mb-4 font-['Creepster']">Share Your Darkest Thoughts</h2>
                <PostForm fetchPostsList={fetchPostsList} />
            </div>

            {/* posts heading */}
            <PostsSection postsList={postsList} fetchPostsList={fetchPostsList} />
        </main>
    )
}