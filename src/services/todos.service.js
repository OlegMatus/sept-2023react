import {apiService} from "./api.service";
import {urls} from "../constants/urls";

const todosService = {
    getAll: () => apiService.get(urls.todos)
}

export {
    todosService
}