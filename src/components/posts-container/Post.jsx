import css from "../Component.module.css";

const Post = ({post}) => {
    const {userId, id, title, body} = post;

    return (
        <div className={css.Style}>
        <div>userId: {userId}</div>
        <div>id: {id}</div>
        <div>title: {title}</div>
        <div>body: {body}</div>
        </div>
    );
};

export {Post};