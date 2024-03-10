import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"

const Header = () => {

    return (
        <div className={css.Header}>
            <NavLink to={'characters'}>characters</NavLink>
            <NavLink to={'episodes'}>episodes</NavLink>
        </div>
    );
};

export {Header};