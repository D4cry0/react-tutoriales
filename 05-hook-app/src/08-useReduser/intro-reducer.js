

const initialState = [{
    id: 1,
    todo: 'Recolectar la (piedra del Alma',
    done: false,
}];


// state y action siempre se envian
// action le indica como quiere que cambie el estado
// funcion pura que retorna un nuevo state
// en caso de no tener la acción que se requiere se retorna el state original
const todoReducer = ( state = initialState, action = {} ) => {

    if( action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ];
    }

    return state;
}


let todos = todoReducer();


const newTodo = {
    id: 2,
    todo: 'Recolectar la pierdra del poder',
    done: false,
}

// type y payload son el standard
// payload es opcional
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );


console.log(todos);
