
import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );


    /* 
        En este ejemplo la funcion se memoriza
        siempre y cuando el componente este memorizado
        y de esta forma no cambia su espacio en memoria
        evitando redibujarlo de nuevo
    */
    const incrementCall = useCallback(
        () => {
            setCounter( ( value ) => value + 1 );
        },
        [],
    )
    

    // Por las referencias en memoria
    // las funciones como este caso
    // no se se pueden memorizar 
    // React.memo en el componente no sirve
    // useCallback es la solución

    const increment = () => {
        setCounter( counter + 1 );
    }

    return (

        <>
            <h1>useCallback Hook: { counter } </h1> 
            <hr />

            <ShowIncrement increment={ incrementCall } />
        </>
    )
}
