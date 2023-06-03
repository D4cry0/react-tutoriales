import { useState } from 'react';

import PropTypes from 'prop-types';

// Si las funciones se mantienen fuera de esta
// cuando se redenrice el componente estas no se renderizan
// solo se renderiza el componente

// Los cambios de estado se deben disparar con el hook useState
// Los hooks tiene la regla de use en su nombre
export const CounterApp = ({ value }) => {

    // Tomas el value para mandarlo como valor de inicio el el state
    const [ counter, setCounter ] = useState( value );

    const handleAdd = ( event ) => {
        setCounter( counter + 1);
        // setCounter( (c) => c + 1 );
        // se puede hacer de 2 maneras con esa expresion o con funciones flecha
    }

    const handleSub = () => {
        setCounter( counter - 1 );
    }

    const handleReset = () => {
        setCounter( value );
    }

    // Cuando el hook cambia el valor solo renderiza el componente
    // que hace el cambio
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSub }> -1 </button>
            <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}