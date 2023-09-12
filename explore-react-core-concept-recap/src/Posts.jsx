import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <h3>Posts: {posts.length}</h3>
            {
                posts.splice(0,10).map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Posts;

// 1. create a state to store data