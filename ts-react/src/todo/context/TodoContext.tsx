import { createContext } from "react";
import { Todo, TodoState } from '../interface/interfaces';

export type TodoContextProps = {
    todoState: TodoState;
    toggleTodo: ( id: string ) => void;
}

// necesitas al menos el objeto vacio por TS lo pide
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);