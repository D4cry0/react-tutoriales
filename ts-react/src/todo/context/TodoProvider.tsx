import React, { useReducer } from 'react';

import { TodoContext } from './TodoContext';
import { TodoState } from '../interface/interfaces';
import { todoReducer } from './TodoReducer';


const INITIAL_STATE: TodoState = {
    todoCount: 0,
    todos: [
        {
            id: '1',
            desc: 'Recolectar priedras del infinito',
            completed: false
        },
        {
            id: '2',
            desc: 'Recolectar priedras del alma',
            completed: false
        }
    ],
    completed: 0,
    pending: 0
}

interface Props {
    // El arreglo se necesita de lo contrario le estas diciendo que solo es un elemento hijo
    children: JSX.Element | JSX.Element[];

}


export const TodoProvider = ({ children }: Props) => {

    const [ todoState, dispatch] = useReducer( todoReducer, INITIAL_STATE);

    const toggleTodo = ( id: string ) => {
        dispatch( { type: 'toggleTodo', payload: {id}} );
    }

    return (
        <TodoContext.Provider value={{
            todoState,

            // Methods
            toggleTodo
        }}>
            { children }
        </TodoContext.Provider>
    )
}
