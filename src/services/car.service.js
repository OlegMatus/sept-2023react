import {apiCarService} from "./apiCar.service";
import {urls} from "../constants/urls";

const carService = {
    getAll: () => apiCarService.get(urls.cars.base),
    create: (data) => apiCarService.post(urls.cars.base, data),
    updateById: (id, data) => apiCarService.put(urls.cars.byId(id), data),
    deleteById: (id) => apiCarService.delete(urls.cars.byId(id))
}

export {
    carService
}
