import axios from "axios"
import { UseLanguageStore } from "../store/LanguageStore";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
})

axiosInstance.interceptors.request.use((config)=>{
    config.headers["Accept-Language"] = UseLanguageStore.getState().language || "en";
    return config;
})

export default axiosInstance;