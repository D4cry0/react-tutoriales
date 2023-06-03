import React from 'react';
import { Tittle } from './components/Tittle';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './context/TodoProvider';



export const Todo = () => {
    
    
    return (
        <TodoProvider>
            <Tittle />
            <TodoList />

        
        </TodoProvider>
    )
}
