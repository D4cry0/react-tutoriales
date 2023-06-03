import PropTypes from 'prop-types';

import { Fragment } from "react"

// Fragment se puede importar 
// <Fragment></Fragment> = <></>
// Es una forma rapida de llamar fragmentos <></>

const arr = [1,2,3,4,5,6,7,8,9];

const nObj = {
    msj: 'Holaaa',
    nom: 'Arny'
}

const getSaludo = (nombre) => {
    return `Hola ${nombre} es un buen día`;
}

// Los elementos no se pueden "imprimir" eso aplica
// para las funciones asyncronas

// export const FirstApp = ( props ) => {
// propierties - son para comunicarse entre componentes
// se pueden desestructurar

// propTypes
// para forzar el tipo de datos y que se envien

export const FirstApp = ({ title, numero, nombre }) => {
    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <p>Soy un nuevo texto</p>
            <p>Soy una variable { 1+1 } </p>
            <p>{ arr }</p>
            {/* <p>{ nObj }</p> */}
            <p>{ nombre }</p>
            <p>{ JSON.stringify(nObj) }</p>
            <p>{ getSaludo('Arny') }</p>
            <p>{ null }</p>
            <p>{ numero * 2 }</p>
            <p>{ nombre }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired
}


// SI define props aqui, se pueden usar en la app ej nombre
FirstApp.defaultProps = {
    // title: 'No hay titulo',
    numero: 0,
    nombre: 'Arny oculto'
}