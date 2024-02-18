import {apiService} from "./api.service";

import {urls} from "../constants/urls";

const postsService = {
    byId: (id) => apiService.get(urls.posts.byId(id)),
    getPostByUserId: (userId) => apiService.get(urls.posts.base, {params: {userId}})
};

export {postsService};