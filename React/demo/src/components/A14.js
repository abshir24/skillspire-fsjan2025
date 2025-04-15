import React, { useState,useEffect } from 'react';

function A14(){
    const [posts, setPosts] = useState(
        [ 
            { id: 1, title: "Hello World" }, 
            { id: 2, title: "Introduction to React" }, 
            { id: 3, title: "Using useEffect and useState" } 
        ])
    
    const [loading, setLoading] = useState(true)    

    useEffect(() =>{
        setTimeout(function() {
            setLoading(false)
        }, 2000);              
    },[])

    const deletePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id))
    }

    if(loading === true) return <h1>Loading...</h1>
    else{
        return (
            <div>
                <h1>Posts</h1>
                    {posts.map((post) => (
                        <div>
                            <li key={post.id}>
                                {post.title}
                                <button onClick = { () => deletePost(post.id) }>Delete Post</button>
                            </li>
                        </div>
                        
                    ))}
            </div>
            )
    }   
}

export default A14