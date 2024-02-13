import {Outlet} from "react-router-dom";
import {Header} from "../components/header-container/Header";

const MainLayout = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};