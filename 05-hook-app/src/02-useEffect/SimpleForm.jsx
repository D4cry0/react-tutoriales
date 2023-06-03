import { useEffect, useState } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'arny',
        email: 'arny@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        // con [ ] puedes acceder a las variables de manera computada
        // desestructuración []
        setFormState({
            ...formState,
            [ name ]: value
        });
    }


    // Se llama cada vez que el componente se redibuja
    // primer argumento es el callback
    // arreglo de depdendencias

    // con arreglo vacio solo se ejecuta una sola vez
    // la primera vez que se carga
    // pones cuando quieres que cambien en la dependencia
    useEffect(() => {
        
    }, []);

    useEffect(() => {
        
    }, [formState])

    useEffect(() => {
        
    }, [email]);


    return (
        <>
            <h1>Formulario Simple</h1>

            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="mail@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            
            {
                (username === 'robocop') && <Message />
            }
        </>
    );
}