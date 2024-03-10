import {apiService} from "./api.service";

import {urls} from "../constants";

const characterService = {
    getById: (ids) => apiService.get(urls.characters.byIds(ids), {params: {ids}})
};

export {characterService};