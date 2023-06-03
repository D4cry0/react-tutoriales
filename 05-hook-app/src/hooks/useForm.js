import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
  
    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        // con [ ] puedes acceder a las variables de manera computada
        // desestructuración []
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResertForm = () => {
        setFormState( initialForm );
    }

    // Con esto ya expones las variables a otros archivos
    return {
        ...formState,
        formState,
        onInputChange,
        onResertForm,
    }
}


