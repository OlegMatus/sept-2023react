import {useEffect, useState} from "react";

import {charactersService} from "../../services";
import {Character} from "./Character";
import css from "./Character.module.css"

const Characters = ({ids}) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        charactersService.getByEpisode(ids).then(({data}) => setCharacters(data))
    }, [ids]);

    return (
        <div className={css.Character}>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};