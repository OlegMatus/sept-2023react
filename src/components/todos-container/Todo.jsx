const Todo = ({todo: {userId, id, title, completed}}) => {

    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed}</div>
        </div>
    );
};

export {Todo};