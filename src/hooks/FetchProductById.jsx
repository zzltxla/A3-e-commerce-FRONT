import { useState, useEffect } from "react";

import { Loader } from "../components/loader/Loader";

export function FetchProductById({ id }) {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const API_URL = `${import.meta.env.VITE_API_BASE_ENDPOINT}/product/${id}`;

        fetch(API_URL)
            .then(response => response.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.error("Error fetching product", error);
            });
    }, [id]);

    if (!product) {
        return (
            <Loader />
        )
    }

    return product;
}