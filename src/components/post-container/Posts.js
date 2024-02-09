import React, {useEffect, useState} from 'react';
import {Post} from "./Post";
import {postService} from "../../services/post.service";
import {PostDetails} from "./PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    const handlePostDetails = (post) => {
        setPostDetails(post);
    }

    return (
        <div>
            <div>
                {posts.map(post => <Post key={post.id} post={post} getInfo={handlePostDetails}/>)}
            </div>
            <hr/>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};