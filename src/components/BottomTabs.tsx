import React from "react"
import { Link } from "gatsby"

const BottomTabs = () => {
  return (
    <div className="bottom-0 bg-green-400 border-t-2 border-black flex justify-around w-full fixed py-2 text-black font-bold">
        <Link to="/" className="hover:underline hover:text-gray-900">
          <div className="flex items-baseline">
          <svg className="w-6 h-6 mr-1 pt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
          Actividades
          </div>
        </Link>
        <Link to="/Ubicaciones" className="hover:underline">
          <div className="flex items-baseline">
          <svg className="w-6 h-6 mr-1 pt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          Ubicaciones
          </div>
        </Link>
    </div>
  )
}

export default BottomTabs