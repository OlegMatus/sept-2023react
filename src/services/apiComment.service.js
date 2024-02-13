import axios from "axios";
import {baseURL} from "../constants/urls";

const apiCommentService = axios.create({baseURL});

export {
    apiCommentService
}