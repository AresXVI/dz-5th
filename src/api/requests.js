import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

export const fetchProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products`);
    return response.json()
}

export function useProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProduct
    })
}

export const SearchProducts = async (query) => {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
    return response.data.products
    
}