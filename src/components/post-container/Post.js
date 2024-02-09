import React from 'react';

const Post = ({post, getInfo}) => {
    const {id, title} = post;

    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <button onClick={() => getInfo(post)}>more info</button>
        </div>
    );
};

export {Post};