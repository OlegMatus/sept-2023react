import {useNavigate} from "react-router-dom";

import css from "../MainBlock.module.css"

const Episode = ({episode}) => {
    const {id, name, air_date, episode: chapter, characters} = episode;

    const navigate = useNavigate();

    const getCharactersByEpisode = () => {
        const characterIds = characters.map(character => character.split('/').slice(-1)[0]).join(',');

        navigate(`/characters/${characterIds}`)
    }

    return (
        <div className={css.Block}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>air_date: {air_date}</div>
            <div>chapter: {chapter}</div>
            <button onClick={getCharactersByEpisode}>getCharacter</button>
        </div>
    );
};

export {Episode};