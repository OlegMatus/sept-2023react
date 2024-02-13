import {Comments} from "../components/comments-container/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {

    return (
        <div>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};