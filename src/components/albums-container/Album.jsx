import React from 'react';

const Album = ({album: {userId, id, title}}) => {

    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {Album};