import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {AlbumsPage} from "../pages/AlbumsPage";
import {TodosPage} from "../pages/TodosPage";
import {CommentsPage} from "../pages/CommentsPage";
import {PostsPage} from "../pages/PostsPage";
import {ErrorPage} from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'albums', element: <AlbumsPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>
            },
            {
                path: 'todos', element: <TodosPage/>
            },
            {
                path: '/posts', element: <PostsPage/>
            }
        ]
    }
])

export {
    router
}