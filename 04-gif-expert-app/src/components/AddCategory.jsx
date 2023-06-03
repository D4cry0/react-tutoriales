import { useState } from "react"

import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( event ) => {
        setInputValue( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        if( inputValue.trim().length < 2 ) return;

        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text"
                placeholder="Buscar Gifts"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}