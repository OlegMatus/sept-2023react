import axios from "axios";
import {carBaseUrl} from "../constants/urls";

const apiCarService = axios.create({baseURL: carBaseUrl})

export {
    apiCarService
}