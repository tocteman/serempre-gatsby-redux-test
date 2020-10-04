import React, {useState} from "react";
import { connect } from "react-redux"
import  "../state/types"
import { v4 as uuidv4 } from 'uuid';


let nav = navigator?.geolocation || null


const TodoCreator = ({createTodo}) => {

  const handleCreation = () => {
    nav.getCurrentPosition(
      (position)=> {
        console.log(createTodo)
        const newTodo: Todo = {
          id: uuidv4(),
          title: currentdButtonText,
          creation_date: Date.now().valueOf(),
          location: {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
          },
            completed: false
          }
          createTodo(newTodo)
      },
      (error)=>{
        return alert("Sorry, this app only works with geolocation enabled on your browser.")
      }
    )
  }



  const [currentdButtonText, setCurrentText] = useState("")
  return (
    <div>
      <input className="text-black" type="text" onChange={(e)=>setCurrentText(e.target.value)}/>
      <button onClick={()=>handleCreation()}>ok</button>
    </div>
  )
}

export default TodoCreator