import {useSearchParams} from "react-router-dom";
// import {useStateContext} from "../../hook/useStateContext";
import {useAppContext} from "../../hook";
import {episodesService} from "../../services";
import {useEffect, useState} from "react";

const Pagination = () => {
    const [query, setQuery] = useSearchParams();
    const {prevNext, setPrevNext} = useAppContext();
    const [episodes, setEpisodes] = useState([])
// const {currentPage, totalPage} = useStateContext();

    useEffect(() => {
        episodesService.getAll().then(({data}) => {
            setPrevNext({prev: data.info.prev, next: data.info.next})

    console.log(data);
        })
    }, [setPrevNext]);

    const prevPage = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }
    const nextPage = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }
    // console.log(prevNext.prev);
    // console.log(prevNext.next);
    return (
        <div>
            <button disabled={!prevNext.prev} onClick={prevPage}>prev</button>
            <button disabled={!prevNext.next} onClick={nextPage}>next</button>
        </div>
    );
};

export {Pagination};