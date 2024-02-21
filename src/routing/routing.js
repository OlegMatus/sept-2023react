import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {EpisodesPage} from "../pages";
import {CharactersByEpisodePage} from "../pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'episode'}/>
            },
            {
                path: 'episode',
                element: <EpisodesPage/>,
                children: [
                    {
                        path: ':id/character',
                        element: <CharactersByEpisodePage/>
                    }
                ]
            },
        ]
    }
])

export {
    router
}