import {useParams} from "react-router-dom";

import {Comments} from "../../components/CommentsContainer/Comments";

const CommentsPage = () => {
    const {id} = useParams();

    return (
        <div>
            <Comments postId={id}/>
        </div>
    );
};

export {CommentsPage};