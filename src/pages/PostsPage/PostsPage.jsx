import {Outlet, useLoaderData} from "react-router-dom";

import {Posts} from "../../components/PostsContainer/Posts";

const PostsPage = () => {
    // const {id: userId} = useParams();
    const {data} = useLoaderData();


    return (
        <div>
            <Outlet/>
            <hr/>
            <Posts posts={data}/>
        </div>
    );
};

export {PostsPage};