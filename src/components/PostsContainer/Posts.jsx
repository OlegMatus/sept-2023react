// import {useEffect, useState} from "react";

import {Post} from "./Post";
// import {postsService} from "../../services/posts.service";

const Posts = ({posts}) => {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     postsService.getPostByUserId(userId).then(({data}) => setPosts(data))
    // }, [userId]);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};