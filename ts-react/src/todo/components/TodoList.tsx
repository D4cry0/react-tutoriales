import React from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';

export const TodoList = () => {

    // const { todoState } = useContext( TodoContext );
    // const { todos } = todoState;
    const { todos } = useTodos();

    return (
        <ul>
            { todos.map( todo => <TodoItem key={ todo.id } todo={todo} /> ) }
        </ul>
    )
}
