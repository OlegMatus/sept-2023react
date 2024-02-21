import React, {createContext, useState} from 'react';

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [trigger, setTrigger] = useState(null);

    const changeTrigger = () => {
        setTrigger(prev => !prev)
    }

    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    return (
        <Context.Provider value={{trigger, changeTrigger, prevNext, setPrevNext}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};