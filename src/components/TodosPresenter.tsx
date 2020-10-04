import React from 'react'
import TodoCreatorContainer from "../containers/TodoCreatorContainer"
import TodoCardContainer from "../containers/TodoCardContainer"

const TodosPresenter = ({todos}) => {
  return(
    <div className="">
      {todos?.length > 0 && todos.map(todo => (
        <div key={todo.id}>
          <div className="rounded-lg shadow text-black"></div>
          <TodoCardContainer id={todo.id}/>
        </div>
      ))}
      <div>
        <div className="mt-16">
          <TodoCreatorContainer/>
        </div>
      </div>
    </div>
  )
}

export default TodosPresenter