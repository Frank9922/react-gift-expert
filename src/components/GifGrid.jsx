import { getGif } from "../helpers/getGifs";
import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( { category } ) => {

    const { imagenes, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading ? (<h2>Cargando...</h2>) : null
            }
            <div className="card-grid">
                {
                    imagenes.map( (image) => (
                        <GifItem key={image.id}
                        {...image}
                        
                        />
                    ))
                }
            </div>

            
        </>
    )
}