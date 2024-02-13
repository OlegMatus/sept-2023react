import {apiService} from "./api.service";
import {urls} from "../constants/urls";

const commentsService = {
    getAll: () => apiService.get(urls.comments.base),
    getById: (id) => apiService.get(id)
}

export {
    commentsService
}