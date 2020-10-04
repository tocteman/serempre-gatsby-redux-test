import React from "react"
import { Link } from "gatsby"

const BottomTabs = () => {
  return (
    <div className="bottom-0 bg-white flex w-full fixed py-2 text-black">
        <Link to="/">
        Actividades
        </Link>
        <Link to="/Ubicaciones">
        Ubicaciones
        </Link>
    </div>
  )
}

export default BottomTabs