import React from 'react'
import TodoCreatorContainer from "../containers/TodoCreatorContainer"
import TodoCardContainer from "../containers/TodoCardContainer"

const TodosPresenter = ({todos}) => {
  console.log(todos)
  return(
    <div className="bg-gray-500">
      {todos?.length > 0 && todos.map(todo => (
        <div key={todo.id}>
          <TodoCardContainer id={todo.id}/>
        </div>
      ))}
      <div>
        <TodoCreatorContainer/>
      </div>
    </div>
  )
}

export default TodosPresenter