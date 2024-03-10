import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {episodesActions} from "../../store";
import {Episode} from "./Episode";

const Episodes = () => {
const {episodes} = useSelector(state => state.episodes);
const dispatch = useDispatch();
const [query, setQuery] = useSearchParams({page: '1'});

const page = query.get('page');


    useEffect(() => {
        dispatch(episodesActions.getAll({page}))
    }, [page]);
    return (
        <div>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};