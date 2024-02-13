import css from "../Component.module.css";

const Todo = ({todo: {userId, id, title, completed}}) => {

    return (
        <div className={css.Style}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed}</div>
        </div>
    );
};

export {Todo};