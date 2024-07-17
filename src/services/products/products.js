import axios from "../axios.js";

export async function getProductsByCategoryId (slug) {
    const formatedSlug = slug.includes('?') ? slug.slice(0, slug.length - 1) : slug;
    return axios.get(`/products/getByCategoryId?slug=${formatedSlug}`)
}

export async function getProductsByBrandId(slug) {
    return axios.get(`/products/getByCategoryId?slug=${slug}`)
}

export async function getProductsAll () {
    return axios.get('/products/all?limit=24')
}

export async function getProductById (slug) {
    return axios.get(`/products/getById?slug=${slug}`)
}

export async function getById (id) {
    return await axios.get(`/products/get?id=${id}`)
}
