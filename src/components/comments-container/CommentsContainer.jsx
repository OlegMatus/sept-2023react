import React, {useEffect, useState} from 'react';
import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";
import {commentService} from "../../services/comment.service";

const CommentsContainer = () => {
    const [comments, setComments] = useState([]);
    const [trigger, setTrigger] = useState(null);
    const [commentForUpdate, setCommentForUpdate] = useState(null);


    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data));
    }, []);

    return (
        <div>
            <CommentForm setTrigger={setTrigger} trigger={trigger} setComments={setComments} commentForUpdate={commentForUpdate} setCommentForUpdate={setCommentForUpdate}/>
            <hr/>
            <Comments comments={comments} setTrigger={setTrigger} setCommentForUpdate={setCommentForUpdate}/>
        </div>
    );
};

export {CommentsContainer};