import {useNavigate} from "react-router-dom";

import css from "../MainBlock.module.css"

const Episode = ({episode}) => {
    const {id, name, air_date, episode: chapter} = episode;

    const navigate = useNavigate();

    return (
        <div className={css.Block}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>air_date: {air_date}</div>
            <div>chapter: {chapter}</div>
            <button onClick={() => navigate(`/episode/${id}/character`, {state: episode})}>getCharacter</button>
        </div>
    );
};

export {Episode};