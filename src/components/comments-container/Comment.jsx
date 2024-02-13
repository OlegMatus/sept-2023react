import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/posts', {state: {postId: id}})
    }
    return (
        <div onClick={handleClick}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            {/*<button onClick={handleClick}>get post</button>*/}
        </div>
    );
};

export {Comment};