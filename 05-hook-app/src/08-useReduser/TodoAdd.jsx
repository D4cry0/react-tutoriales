import { useState } from "react"
import { useForm } from "../hooks/useForm";


export const TodoAdd = ({ onNewTodo }) => {

    // NAME Y VALUE DEL COMPONENTE TIENEN QUE SER IGUALES
    const { formState, onInputChange, onResertForm, description  } = useForm({
        description: '',
    });


    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if( description.length <= 1) return;

        // AGREGAMOS LOS OTROS DATOS QUE NECESITAMOS PERO QUE NO SE NECESITAN EN USEFORM
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }

        onNewTodo( newTodo );
        // ESTA ULTIMA PARA EVITAR QUE SE COLOQUE DOBLE
        onResertForm();
    }


    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type='text' 
                placeholder='¿Que hay que hacer?'
                className='form-control'
                name='description'
                value={ description }
                onChange={ onInputChange }
            />

            <button
                type='submit'
                className='btn btn-outline-primary mt-1'
            >
                Agregar
            </button>
        </form>
    )
}
