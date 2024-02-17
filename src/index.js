import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import {router} from "./routing/routing";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

