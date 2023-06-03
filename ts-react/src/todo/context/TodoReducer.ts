import { Todo, TodoState } from '../interface/interfaces';


type TodoAction =
    | { type: 'addTodo', payload: Todo }
    | { type: 'toggleTodo', payload: { id: string } };

export const todoReducer = ( state: TodoState, action: TodoAction ): TodoState => {
    switch ( action.type ) {
        case 'addTodo': 
            return {
                ...state,
                todos: [ ...state.todos, action.payload ]
            }
        case 'toggleTodo': 
            return {
                ...state,
                // {...todo} es para generar uno nuevo, asi lo pide reducer
                todos: state.todos.map( ({...todo}) => {
                    if( todo.id === action.payload.id ){
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
    
        
        default:
            return state;
    }
}   