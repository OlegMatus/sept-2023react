import axios from "axios";
import {baseURL} from "../constants/urls";

const apiUserService = axios.create({baseURL});

export {
    apiUserService
}