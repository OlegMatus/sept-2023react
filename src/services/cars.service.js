import {apiService} from "./api.service";
import {urls} from "../constants/urls";

const carsService = {
    getAll: () => apiService.get(urls.cars.base),
    create: (data) => apiService.get(urls.cars.base,data),
    updateById: (id, data) => apiService.get(urls.cars.getById(id), data),
    deleteById: (id) => apiService.get(urls.cars.getById(id))
}

export {
    carsService
}