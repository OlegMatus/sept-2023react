// import {useLoaderData} from "react-router-dom";

import {useParams} from "react-router-dom";

import {Posts} from "../../components/PostsContainer/Posts";

const PostsPage = () => {
    const {id} = useParams();

// const {data} = useLoaderData();

    return (
        <div>
            <Posts userId={id}/>
        </div>
    );
};

export {PostsPage};