import css from "../Component.module.css";

const Album = ({album: {userId, id, title}}) => {

    return (
        <div className={css.Style}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {Album};