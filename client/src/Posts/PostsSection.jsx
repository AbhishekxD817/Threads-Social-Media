import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

export default function PostsSection({ postsList, fetchPostsList }) {

    return <>
        <h2 className="text-4xl font-bold mb-6 font-['Creepster'] glow">Recent Posts :|</h2>
        <div className="space-y-6">
            {
                postsList.map((post) => {
                    return <Post key={post._id} post={post} fetchPostsList={fetchPostsList} />
                })
            }
        </div>
    </>
}