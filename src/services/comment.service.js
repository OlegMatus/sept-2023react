import {apiCommentService} from "./apiComment.service";
import {urls} from "../constants/urls";

const commentService = {
    getAll: () => apiCommentService.get(urls.comments.base),
    getById: (id) => apiCommentService.get(urls.comments.byId(id)),
    create: (data) => apiCommentService.post(urls.comments.base, data),
    updateById: (id, data) => apiCommentService.patch(urls.comments.byId(id), data),
    deleteById: (id) => apiCommentService.delete(urls.comments.byId(id))
}

export {
    commentService
}