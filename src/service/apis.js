import { api1 } from "../config/axios/instance"

function getProduct(pz = 5) {
    return api1.get(`rest/default/V1/products?searchCriteria[pageSize]=${pz}`)
}
function getCategory() {
    return api1.get('/rest/default/V1/categories')
}

export { getProduct, getCategory }