 import axios from "../axios.js";

export async function getBanners () {
    return await axios.get('promo/slider')
}

export async function getMesh () {
    return await axios.get('promo/mesh')
}
