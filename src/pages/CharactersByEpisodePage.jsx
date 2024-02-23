import {Characters} from "../components";
import {useParams} from "react-router-dom";

const CharactersByEpisodePage = () => {
        const {ids} = useParams();

        return (
            <div>
                <Characters ids={ids}/>)
            </div>
        );
    }
;

export {CharactersByEpisodePage};