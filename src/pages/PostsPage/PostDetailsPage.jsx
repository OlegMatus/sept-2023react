import React from 'react';
import {PostDetails} from "../../components/PostsContainer/PostDetails";
import {useLocation} from "react-router-dom";
import {CommentsPage} from "../CommentsPage/CommentsPage";

const PostDetailsPage = () => {
const {state: post} = useLocation();

    return (
        <div>
            <PostDetails post={post}/>
            <h1>CommentsByPost</h1>
            <CommentsPage/>
        </div>
    );
};

export {PostDetailsPage};