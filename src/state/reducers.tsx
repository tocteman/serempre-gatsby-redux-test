import { bindActionCreators, createStore, compose } from "redux"
import * as availableActions from "./constants"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import TodosContainer from "../containers/TodosContainer"



const todoReducer = (state, action) => {
  const {type, payload} = action
  if (type === availableActions.CREATE_TODO) {
    const {todo} = payload
    return {...state,todos: [...state.todos, todo]}
  }  
  
  else if (type === availableActions.UPDATE_TODO){
    const {todo} = payload
    const newTodos = state.todos.map((todo:Todo) => ({...todo}))
    const index = newTodos.findIndex(currentTodo => currentTodo.id === todo.id)
    if (index === -1) {
      return{...state, todos: newTodos}
    } 
    else {
      newTodos[index] = todo
      return{...state, todos: newTodos}
    } 
  }  
  
  else if (type === availableActions.DELETE_TODO) {
    const newTodos = state.todos.filter((todo:Todo) => todo.id !== payload)
    return {
      ...state, todos: newTodos
    }
  }
   else return {
      ...state
    }
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, todoReducer)


export const initialState = {
  todos: []
}


// const reduxStore =  createStore(persistedReducer, initialState, 
// const persistor = persistStore(reduxStore)
// export { reduxStore, persistor }

const reduxStore = ()=> createStore(todoReducer, initialState)

export {reduxStore}