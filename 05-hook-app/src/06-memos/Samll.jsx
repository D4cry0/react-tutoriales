import React from 'react';


/* 
    El memo se utiliza para
    componentes muy grandes o que tengan
    procesos muy pesados y que no se quieran ejecutar
    cada que se actualice algun componente ajeno

    Entonces memo solo actualiza cuando los props cambien

    Su uso no es tan comun y solo se debe usar cuando sea 
    muy necesario

*/

export const Samll = React.memo(({ value }) => {
    console.log('Me volvi a dibujar :(');

    return (
        <small>{ value }</small>
    )
})
