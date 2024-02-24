import React, {createContext, useState} from 'react';
import {useSearchParams} from "react-router-dom";

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [trigger, setTrigger] = useState(null);
    const [, setQuery] = useSearchParams();

    const changeTrigger = () => {
        setTrigger(prev => !prev)
    }

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

    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    return (
        <Context.Provider value={{trigger, changeTrigger, prevNext, setPrevNext, prevPage, nextPage}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};