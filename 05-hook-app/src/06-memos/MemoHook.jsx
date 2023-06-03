import { useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter'


const heavyStuff = ( iteratorNumber = 100 ) => {
    for( let i = 0; i < iteratorNumber; i++ ) {
        console.log('Ahi vamos....');
    } 

    return `${ iteratorNumber } iteraciones realizadas`;
}


export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true);

    // arreglo vacio solo lo memoriza una vez
    // su uso es para tareas muy pesadas
    // para evitar que se ejecuten sin control
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
        
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />

            <h4>{ memorizedValue }</h4>

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show ) }
            >
                Show/Hide {JSON.stringify(show) }
            </button>

        </>
    )
}
