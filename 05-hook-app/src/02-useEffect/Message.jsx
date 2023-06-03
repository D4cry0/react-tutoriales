import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 });

    useEffect(() => {
        console.log('Montado');
    
        
        const onMouseMove = ({ x , y }) => {
            setCoords({ x , y });
        }

        window.addEventListener('mousemove', onMouseMove);

        // Es un clear del component este nos ayuda a 
        // destruirlo completamente
        // Sirve para eliminar listeners por ejemplo
        return () => {
            console.log('Desmontado');
            window.removeEventListener('mousemove', onMouseMove);
        }
      }, [])

    return (
        <>
            <h3>Usuario ya existe</h3>
            {
                JSON.stringify( coords )
            }
        </>
    );
}