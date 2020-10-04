import React, {useState} from "react";
import { connect } from "react-redux"
import  "../state/types"
import { v4 as uuidv4 } from 'uuid';


let nav = typeof navigator !== undefined ? navigator?.geolocation : null


const TodoCreator = ({createTodo}) => {

  const handleCreation = () => {
    const newTodoWithoutPosition: Todo = {
      id: uuidv4(),
      title: currentdButtonText,
      creation_date: Date.now().valueOf(),
      location: {
        longitude: 0,
        latitude: 0 
      },
        completed: false
      }
    nav.getCurrentPosition(
      (position)=> {
          const newTodo = {
            ...newTodoWithoutPosition,
            location: {
              longitude: position.coords.longitude,
              latitude: position.coords.latitude
            }
          }
          createTodo(newTodo)
      },
      (error)=>{
        alert("No encontramos tu ubicación, en el futuro no podremos ayudarte a encontrar este pendiente")
        createTodo(newTodoWithoutPosition)
      }
    )
  }



  const [currentdButtonText, setCurrentText] = useState("")
  return (
    <div className="w-full flex flex-col">
    <div className="text-sm w-full">Nuevo Pendiente</div>
      <div className="flex justify-around items-center">
      <input className="text-black border-2 shadow border-black rounded-lg mr-4 py-2 px-2" type="text" onChange={(e)=>setCurrentText(e.target.value)}/>
      <button
      onClick={()=>handleCreation()}
      className="bg-green-400 shadow rounded-full p-1 border-2 border-black"
      >
        <svg className="w-8 h-8 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>
    </div>
    </div>
  )
}

export default TodoCreator