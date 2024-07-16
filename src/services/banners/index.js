 import axios from "../axios.js";

export async function getBanners () {
    return await axios.get('promo/slider')
}
