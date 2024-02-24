import React, {createContext, useState} from 'react';

const ContextInit = createContext(null);
const ContextState = ({children}) => {
    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalPage, setTotalPage] = useState(1);
    const state = useState(null);

    return (
        <ContextInit.Provider value={{state}} >
            {children}
        </ContextInit.Provider>
    );
};

export {
    ContextState,
    ContextInit
};