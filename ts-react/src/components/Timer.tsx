import React, { useEffect, useRef, useState } from 'react'

type TimerArgs = {
    milisegundos: number
}

export const Timer = ({ milisegundos }: TimerArgs) => {

    const [segundos, setSegundos] = useState(0);

    const ref = useRef<NodeJS.Timer>();
    
    useEffect(() => {
        // Si le ingresas una funcion al set es la mejor manera de manejar las actualizaciones para no usar las dependencias
        ref.current && clearInterval( ref.current );
        ref.current = setInterval( () => setSegundos( s => s + 1) , milisegundos);

    }, [milisegundos])
    

    return (
        <>
            <h4>Timer: <small>{ segundos }</small></h4>
        </>
    )
}
