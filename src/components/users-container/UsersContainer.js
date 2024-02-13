import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import {UserForm} from "./UserForm";
import {Users} from "./Users";

const UsersContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UsersContainer};