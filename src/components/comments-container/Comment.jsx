import React from 'react';
import {commentService} from "../../services/comment.service";

const Comment = ({comment, setCommentForUpdate, setTrigger}) => {
const {postId, id, name, email, body} = comment;

    const deleteComment = () => {
        commentService.getById(id);
        setTrigger(prev => !prev)
    };

    return (
        <div>
            <div>postId: {postId}</div>
            <div><b>id: {id}</b></div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={() => setCommentForUpdate(comment)}>update</button>
            <button onClick={deleteComment}>delete</button>
        </div>
    );
};

export {Comment};