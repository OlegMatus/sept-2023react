import {useEffect} from "react";

import {useAppContext} from "../../hook";
import {episodesService} from "../../services";

const Pagination = () => {
    const {prevNext, setPrevNext} = useAppContext();
    const {prevPage, nextPage} = useAppContext();

    useEffect(() => {
        const {info: {prev, next}} = episodesService.getAll();
        setPrevNext(prev, next)

    }, [setPrevNext]);

    return (
        <div>
            <button disabled={!prevNext.prev} onClick={prevPage}>prev</button>
            <button disabled={!prevNext.next} onClick={nextPage}>next</button>
        </div>
    );
};

export {Pagination};