const BASE_URL="https://fakestoreapi.com/";
export const api=async()=>{
    const getProducts= await axios.get(`${BASE_URL}products`);
    return getProducts.data;
}