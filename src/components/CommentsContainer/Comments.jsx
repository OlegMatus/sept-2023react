import {useEffect, useState} from "react";
import {commentsService} from "../../services/comments.service";
import {Comment} from "./Comment";

const Comments = ({postId}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getCommentsByPostId(postId).then(({data}) => setComments(data))
    }, [postId]);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};