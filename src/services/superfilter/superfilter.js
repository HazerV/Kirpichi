import axios from "../axios.js";


export const superFilter = (data) => {
    const baseUrl = '/products/filter';
    if (!data) {
        return axios.get(baseUrl);
    }
    const defaultLimit = 9999;
    const requestData = {
        ...data,
        limit: data.limit || defaultLimit,
    };
    return axios.post(baseUrl, requestData);
};
