import {apiService} from "./api.service";
import {urls} from "../constants/urls";

const postsService = {
    getAll: () => apiService.get(urls.posts.base),
    getById: (postId) => apiService(urls.posts.byId(postId))
}

export {
    postsService
}