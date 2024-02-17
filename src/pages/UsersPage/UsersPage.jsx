import {useLoaderData} from "react-router-dom";

import {Users} from "../../components/UsersContainer/Users";

const UsersPage = () => {
let {data} = useLoaderData();

    return (
        <div>
            <Users users={data}/>
        </div>
    );
};

export {UsersPage};