import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {UserDetails} from "../../components/UsersContainer/UserDetails";
import {usersService} from "../../services/users.service";

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null);
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state?.user) {
            setUserDetails(state.user)
        } else {
            usersService.byId(id).then(({data}) => setUserDetails(data))
        }
    }, [id, state]);


    return (
        <div>
            <Outlet/>
            <hr/>
            {userDetails && <UserDetails userDetails={userDetails}/>}
        </div>
    );
};

export {UserDetailsPage};