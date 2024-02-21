import {useEffect, useState} from "react";

import {charactersService} from "../../services";
import {Character} from "./Character";
import {useStateContext} from "../../hook/useStateContext";

const Characters = ({episode}) => {
    const [characters, setCharacters] = useState([]);
    const {setError} = useStateContext();

    useEffect(() => {
        const getCharactersByEpisode = async () => {
            const characters = episode.characters;

            try {
                const characterIds = characters.map(character =>
                    character.split('/').slice(-1)[0]
                );
                const {data} = await charactersService.getByEpisode(characterIds);
                setCharacters(data.results);
            } catch (e) {
                setError(e.message)
            }
        }
        getCharactersByEpisode()

    }, [episode.characters, setError]);

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};