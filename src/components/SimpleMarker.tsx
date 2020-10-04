import React, {FunctionComponent } from "react"
import "../state/types"


const SimpleMarker:FunctionComponent<SimpleMarker> = ({text}) => 
{ 
  return(
    <div className="bg-green-400 border-2 border-black shadow absolute rounded-lg w-16 py-1 text-center">
      {text}
    </div>
  )
}

export default SimpleMarker