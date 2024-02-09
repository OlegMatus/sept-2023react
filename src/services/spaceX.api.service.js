import axios from "axios";
import {spaceXBaseUrl} from "../constants/urls";

const spaceXApiService = axios.create({baseURL: spaceXBaseUrl});

export {
    spaceXApiService
}