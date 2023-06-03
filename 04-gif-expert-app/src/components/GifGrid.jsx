// import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    // esto reemplaza todo lo de abajo comentado
    const { images, isLoading} = useFetchGifs( category );

    /* // useEfect para disparar efectos secundarios
    // evitar llamadas a funciones de manera no eficiente
    // solo cuando es necesario

    const [images, setImages] = useState([]);

    // Se usan otras funciones porque el useEffect no permite retorno de promesas
    const getImages = async() => {
        const newImgs = await getGifs( category );
        setImages( newImgs );
    }

    // cada que se crea este componente, esta sección se ejecuta
    // posterior a eso cuando se le llame y ya no lo hace
    // en cada momento que se redibuje algo al menos que sea necesario
    // explicitamente
    useEffect( () => {
        getImages();
    }, []); */


    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }


            <div className="card-grid">
                { 
                    images.map( ( image ) => (
                        <GifGridItem 
                            key={ image.id }
                            { ...image } 
                        />
                    )) 
                }
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}