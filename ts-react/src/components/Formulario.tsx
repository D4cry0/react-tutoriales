import React from 'react'
import { useForm } from '../hooks/useForms'


interface FormData {
    email: string;
    nombre: string;
    edad: number;
}

export const Formulario = () => {
    
    const { formulario, handleChange } = useForm<FormData>({
        email: '',
        nombre: '',
        edad: 35
    });
    
    return (
        <form autoComplete='off'>
            <div className='mb-3'>
                <label className='form-label'>Email:</label>
                <input 
                    type='email'
                    className='form-control'
                    name='email'
                    value={ formulario.email }
                    onChange={ handleChange }
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Nombre:</label>
                <input 
                    type='text'
                    className='form-control'
                    name='nombre'
                    value={ formulario.nombre }
                    onChange={ handleChange }
                />
            </div>

            { JSON.stringify( formulario ) }
        </form>

       
    )
}
