import {Outlet} from "react-router-dom";

import {EpisodePagination, Episodes} from "../components";

const EpisodesPage = () => {

    return (
        <div>
            <Episodes/>
            <EpisodePagination/>
            <Outlet/>
        </div>
    );
};

export {EpisodesPage};