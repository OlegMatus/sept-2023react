import {apiService} from "./api.service";
import {urls} from "../constants";

const charactersService = {
    getByEpisode: (ids) => apiService.get(urls.characters.byIds(ids))
};

export {charactersService};