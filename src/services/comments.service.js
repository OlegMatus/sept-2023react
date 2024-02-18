import {apiService} from "./api.service";

import {urls} from "../constants/urls";

const commentsService = {
    getCommentsByPostId: (postId) => apiService.get(urls.comments, {params: {postId}})
};

export {commentsService};