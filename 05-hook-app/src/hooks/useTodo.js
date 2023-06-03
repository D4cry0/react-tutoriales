import { useEffect, useReducer } from "react";

import { todoReducer } from '../08-useReduser/todoReducer';

const initialSate = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
];

const init = () => {
    return JSON.parse( localStorage.getItem('todos') || [] ); 
}

export const useTodo = () => {

    // disatchTodo
    const [ todos, dispatch ] = useReducer( todoReducer, initialSate , init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos]);
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch( action );
    }

    // Lo de pasar referencias de funciones de padre a hijo
    // sobre todo si el arbol es muy grande
    // se arregla con el useContext
    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}