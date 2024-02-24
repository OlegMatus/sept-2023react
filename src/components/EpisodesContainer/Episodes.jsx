import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import css from "../MainBlock.module.css"
import {episodesService} from "../../services";
import {useAppContext} from "../../hook";
import {useStateContext} from "../../hook";
import {Episode} from "./Episode";

const Episodes = () => {
    const [query,] = useSearchParams({page: '1'});
    const {setPrevNext} = useAppContext();

    const [error, setError, episodes, setEpisodes] = useStateContext();


    useEffect(() => {
        const getEpisodes = async () => {
            try {
                const {data} = await episodesService.getAll(query.get('page'));
                setEpisodes(data.results)
                setPrevNext({prev: data.prev, next: data.next})
            } catch (e) {
                setError('Error fetching episodes!', e)
            }
        }
        getEpisodes()
    }, [query, setError, setPrevNext, setEpisodes]);

    return (
        <div className={css.Main}>
            {error && <div>{error}</div>}
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};