import {Link} from "react-router-dom";

const UserDetails = ({userDetails}) => {
const {id, name, username, email} = userDetails;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <Link to={'posts'}>post of current user</Link>
            {/*<div>address: {address}</div>*/}
        </div>
    );
};

export {UserDetails};