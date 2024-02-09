import {spaceXApiService} from "./spaceX.api.service";
import {urls} from "../constants/urls";

const launchService = {
    getAll: () => spaceXApiService.get(urls.launches)
}

export {
    launchService
}