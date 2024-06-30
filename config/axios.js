import axios from "axios";

export const axiosApi = axios.create({
    baseURL: "https://ecommerce.codeitapps.com/api/",
    // baseURL: "http://127.0.0.1:8000/api/",
    headers:{
        "Content-Type" : "application/json",
        "Accept":"application/json",
    }
});