import { createStore } from 'redux'

const INITIAL_STATE = {
   data: [
      'Estudar react.js'
   ]
}

// Reducer
function todo(state = INITIAL_STATE, action) {
   switch(action.type) {
      case 'ADD_TASK':
         return {
            ...state,
            data: [
               ...state.data,
               action.payload
            ]
         }
      
      case 'REMOVE_TASK':
         const newState = state.data.filter(data => data !== action.payload)

         return {
            data: newState
         }

      default: 
         return state
   }
}

const store = createStore(todo)

export default store