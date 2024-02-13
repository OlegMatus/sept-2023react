import {Outlet} from "react-router-dom";

import {Comments} from "../components/comments-container/Comments";
import {useState} from "react";

const CommentsPage = () => {
    return (
        <div>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};