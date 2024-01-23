import { useState, useEffect } from "react";
import axios from "axios";

const FetchProducts = () => {

    const [products, setProducts] = useState([]);
    
        useEffect(() => {
            const fetchProducts = async () => {
                const { data } = await axios.get('/api/products');
                setProducts(data);
            }
    
            fetchProducts();
        },[])

    return products;
}

export default FetchProducts;