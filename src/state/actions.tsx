import * as availableActions from "./constants"
import  "./types"

export const createTodo = (todo: Todo) => ({
  type: availableActions.CREATE_TODO,
  payload: {todo}
})

export const updateTodo = (todo: Todo) => ({
  type: availableActions.UPDATE_TODO,
  payload: {todo}
})

export const deleteTodo = (id: string) => ({
  type: availableActions.DELETE_TODO,
  payload: id
})

