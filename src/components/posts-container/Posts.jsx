import {useEffect, useState} from "react";
import {postsService} from "../../services/posts.service";
import {Post} from "./Post";
import {useLocation} from "react-router-dom";

const Posts = () => {
    const [post, setPost] = useState({});
    const {state: {postId}} = useLocation();

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data))
    }, [postId]);

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};