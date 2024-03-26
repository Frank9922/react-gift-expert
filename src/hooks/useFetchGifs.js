import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImagenes = async() => {
       const newImagen= await getGif(category);
       setImagenes(newImagen);
       setIsLoading(false);
    }

    useEffect( () => {
        getImagenes();
    })


    return {
        imagenes,
        isLoading
    }
}