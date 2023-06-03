import { useState } from "react";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    // PUEDEN CONDICIONAR PORQUE PERDERIAN SU POSICIÓN Y REFERENCIA
    // REACT LOS ACOMODA EN ORDEN
    const [ categories, setCategories ] = useState([ 'Ghost In The Shell' ]);


    const onAddCategory = ( newCategory ) => {
        // push muta objetos y React no acepta las mutaciones por eso no se usa
        
        // Con desestructuración y operador spread se genera un nuevo arreglo
        // con eso se evito mutar el objeto anterios, entonces seria generar "copias" del objeto
        // inicializados con los datos anteriores y los nuevos
        
        if( categories.includes(newCategory) ) return;
        
        setCategories( [ newCategory, ...categories ] );
    }


    return (
        <>
            {/* titulo */}
            <h1>GfExpertApp</h1>

            {/* input */}
            <AddCategory 
                onNewCategory={ onAddCategory } 
            />

            {/* listado de cards */}
            {
                // Return implicito ()
                categories.map( category => (
                        <GifGrid key={ category } category={ category } />
                    ))
            }
            {/* gif item */}

        </>
    );
}
