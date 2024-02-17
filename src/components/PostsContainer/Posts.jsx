import {useEffect, useState} from "react";

import {Post} from "./Post";
import {postsService} from "../../services/posts.service";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getPostByUserId(userId).then(({data}) => setPosts(data))
    }, [userId]);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};