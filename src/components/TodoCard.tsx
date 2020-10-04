import React from "react";


let nav = navigator?.geolocation || null

const TodoCard = ({todo, updateTodo, deleteTodo}) => {


  const handleUpdate = () => {
    nav.getCurrentPosition(
      (position)=> {
        const changedTodo: Todo = {
          ...todo,
          location: {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
          },
          completed: !todo.completed
        }     
          updateTodo(changedTodo)
      },
      (error)=>{
        return alert("Sorry, this app only works with geolocation enabled on your browser.")
      }
    )  
  }


  const handleDelete = () => {
    deleteTodo(todo.id)
  }
  return (
    <div className="flex">
      <div>{todo.title}</div>
      <div onClick={()=>handleUpdate()}>
        {todo.completed === true?  (<div>completado</div>) :
          (<div>no completado</div>)}
      </div>
      <div onClick={()=> handleDelete()}>x</div>
    </div>
  )
}

export default TodoCard