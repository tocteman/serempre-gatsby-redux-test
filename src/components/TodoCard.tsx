import React from "react";
import {format} from "date-fns"

let nav = typeof navigator === "undefined" ? null : navigator?.geolocation

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
        alert("Sorry, this app only works with geolocation enabled on your browser.")
        const changedTodoWithoutPositon: Todo = {
          ...todo,
          completed: !todo.completed
        }
        updateTodo(changedTodoWithoutPositon)
      }
    )  
  }


  const handleDelete = () => {
    deleteTodo(todo.id)
  }
  return (
    <div className="flex flex-col bg-gray-200 rounded-lg shadow border-2 border-black my-2 px-2 leading-tight py-2">
      <div className="flex items-center">
         <input type="checkbox" checked={todo.completed} className="border-2 shadow border-black" onClick={()=>handleUpdate()}/>
        <div className="font-bold text-lg ml-4">{todo.title}</div>

      </div>
      <div className="flex justify-between mt-1 items-center">
        <div >
          {todo.completed === true ?  (
          <div className="text-green-600 text-sm ">Completado</div> 
          ) :(
          <div className="text-sm">
            Pendiente desde el <span className="italic">{format(todo.creation_date, 'dd/MMM/yyyy')}!</span></div>
          )}
        </div>
        <button className="font-bold cursor-pointer mb-1 hover:text-red-900"
        onClick={()=> handleDelete()}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>


        </button>
      </div>
    </div>
  )
}

export default TodoCard