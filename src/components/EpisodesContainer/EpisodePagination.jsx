import {useSearchParams} from "react-router-dom";
// import {useStateContext} from "../../hook/useStateContext";
// import {useAppContext} from "../../hook";

const EpisodePagination = () => {
    const [, setQuery] = useSearchParams();
    // const {prevNext} = useAppContext();
// const {currentPage, totalPage} = useStateContext();

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

    return (
        <div>
            <button onClick={prevPage}>prev</button>
            <button onClick={nextPage}>next</button>
        </div>
    );
};

export {EpisodePagination};