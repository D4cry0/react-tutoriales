import React from 'react';
import { Todo } from '../interface/interfaces';
import { useTodos } from '../hooks/useTodos';


interface Props {
    todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {

    // const { toggleTodo } = useContext( TodoContext );
    const { toggleTodo } = useTodos();

    return (
        <li 
            style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : ''
            }}
            onDoubleClick={ () => toggleTodo( todo.id ) }
        >
            { todo.desc }
        </li>
    )
}
