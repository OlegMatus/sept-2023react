const PostDetails = ({post}) => {
    const {userId, id, title, body} = post;

    return (
        <div>
            <h1>PostDetails</h1>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostDetails};