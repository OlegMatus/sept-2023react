import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {UsersPage} from "../pages/UsersPage/UsersPage";
import {UserDetailsPage} from "../pages/UsersPage/UserDetailsPage";
import {PostsPage} from "../pages/PostsPage/PostsPage";
import {usersService} from "../services/users.service";
// import {postsService} from "../services/posts.service";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'users'}/>
            },
            {
                path: 'users',
                element: <UsersPage/>,
                loader: () => usersService.getAll()
            },
            {
                path: 'users/:id',
                element: <UserDetailsPage/>,
                children: [
                    {
                        path: 'posts',
                        element: <PostsPage/>,
                        // loader: ({params: userId}) => postsService.getPostByUserId(userId)
                    }
                ]
            },
        ]


    }
])

export {
    router
}