import React, {createContext, useState} from 'react';

const ContextInit = createContext(null);
const ContextState = ({children}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [error, setError] = useState(null);

    return (
        <ContextInit.Provider value={{currentPage, setCurrentPage, totalPage, setTotalPage, error, setError}} >
            {children}
        </ContextInit.Provider>
    );
};

export {
    ContextState,
    ContextInit
};