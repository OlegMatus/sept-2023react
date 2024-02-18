import {NavLink} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <NavLink to={`/posts/${id}`} state={post}>post-details</NavLink>
        </div>
    );
};

export {Post};