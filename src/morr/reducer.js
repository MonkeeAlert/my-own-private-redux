import { ADD_TODO, REMOVE_TODO } from './actions';

/** reducer */
export const rootReducer = ( state, { type, payload } ) => {
  switch(type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [ ...state.todos, payload ]
      }

    case REMOVE_TODO:
      const filtered = state.todos.filter( t => t.id !== payload );

      return {
        ...state,
        todos: filtered
      }  

    default: return { ...state }
  }
}