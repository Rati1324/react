export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const DELETE_TODO = "DELETE_TODO"

export function todoReducer(state, action) {
  switch(action.type){
    case ADD_TODO:
      return {todos: [...state.todos, action.payload]}
    case TOGGLE_TODO:
      return {}
    case DELETE_TODO:
      return {
        todos: state.todos.filter(t => (
          t.id !== action.payload
        ))
      }
      
    default:
      return state;
  }
}