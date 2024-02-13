import {apiUserService} from "./apiUser.service";
import {urls} from "../constants/urls";

const userService = {
    getAll: () => apiUserService.get(urls.users.base),
    create: (data) => apiUserService.post(urls.users.base, data)
}

export {
    userService
}