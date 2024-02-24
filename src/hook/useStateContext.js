import {useContext} from "react";

import {ContextInit} from "../hoc";

const useStateContext = () => useContext(ContextInit);

export {
    useStateContext
}