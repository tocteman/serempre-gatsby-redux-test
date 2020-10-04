import React from "react"
import BottomTabs from "./BottomTabs"

const Layout=({children})=> {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-400">
      {children}
      <BottomTabs/>
    </div>
  )
}

export default Layout