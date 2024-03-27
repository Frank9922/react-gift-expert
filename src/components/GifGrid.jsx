import { getGif } from "../helpers/getGifs";
import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types'

export const GifGrid = ( { category, RemoveCategory } ) => {

    const { imagenes, isLoading } = useFetchGifs(category);

    return (
        <>
            <div>
            <div className="card-title">
            <h3>{category}</h3>
            {
                isLoading ? (<h2>Cargando...</h2>) : null
            }
            <button onClick={() => {RemoveCategory(category)}} className="btn-eliminar">Eliminar</button>
            </div>

            <div className="card-grid">
                {
                    imagenes.map( (image) => (
                        <GifItem key={image.id}
                        {...image}
                        
                        />
                    ))
                }
            </div>
            </div>

            
        </>
    )
}
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}