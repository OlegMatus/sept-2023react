import {useLocation} from "react-router-dom";

import {Characters} from "../components";

const CharactersByEpisodePage = () => {
        const {state: episode} = useLocation();

        return (
            <div>
                <Characters episode={episode}/>)
            </div>
        );
    }
;

export {CharactersByEpisodePage};