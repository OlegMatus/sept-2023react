import {jsonApiService} from "./json.api.service";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => jsonApiService(urls.posts)
}

export {
    postService
}