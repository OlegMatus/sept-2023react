import {apiService} from "./api.service";
import {urls} from "../constants";

const charactersService = {
    getByEpisode: (id) => apiService.get(urls.characters, {params: id})
};

export {charactersService};