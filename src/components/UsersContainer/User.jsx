import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;

    let navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={() => navigate(`/users/${id}`, {state: {user}})}>user-details</button>
        </div>
    );
};

export {User};