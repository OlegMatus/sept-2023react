import {Outlet} from "react-router-dom";

import {Header} from "../components/Header/Header";
import {Pagination} from "../components";

const MainLayout = () => {

    return (
        <div>
            <Header/>
            <Pagination/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};