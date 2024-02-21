import {useContext} from "react";

import {ContextInit} from "../hoc/ContextState";

const useStateContext = () => useContext(ContextInit);

export {
    useStateContext
}