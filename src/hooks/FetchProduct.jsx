// import { Loader } from "../components/loader/Loader";
// import { useState } from "react";

export function FetchProduct({path}){
    return new Promise((resolve, reject) => {
        const API_URL = import.meta.env.VITE_API_BASE_ENDPOINT + path;
    
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            resolve(data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

