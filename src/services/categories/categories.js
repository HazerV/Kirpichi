import axios from "../axios.js";

export const getAllCategories = () => {
    const baseUrl = '/api/categories/all';
    return axios.get(baseUrl);
};
