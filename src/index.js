import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import './index.css';
import {router} from "./routing";
import {ContextProvider} from "./hoc";
import {ContextState} from "./hoc/ContextState";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <ContextState>
            <RouterProvider router={router}/>
        </ContextState>
    </ContextProvider>
);

