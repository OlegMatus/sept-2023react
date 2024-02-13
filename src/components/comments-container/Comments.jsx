import React from 'react';
import {Comment} from "./Comment";

const Comments = ({comments, setComments, setCommentForUpdate, setTrigger}) => {

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment} setCommentForUpdate={setCommentForUpdate} setTrigger={setTrigger}/>)}
        </div>
    );
};

export {Comments};