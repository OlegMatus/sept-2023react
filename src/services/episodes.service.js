import {apiService} from "./api.service";

import {urls} from "../constants";

const episodesService = {
    getAll: (page) => apiService.get(urls.episodes.base, {params: {page}}),
    getById: (id) => apiService.get(urls.episodes.byId(id))
};

export {episodesService};