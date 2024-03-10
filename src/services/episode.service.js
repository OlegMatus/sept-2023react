import {apiService} from "./api.service";

import {urls} from "../constants";

const episodeService = {
    getAll: (page) => apiService.get(urls.episodes, {params: {page}})
};

export {episodeService};