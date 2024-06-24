import { API } from "@/constants/config";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: API,
})