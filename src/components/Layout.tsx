import React from "react"
import BottomTabs from "./BottomTabs"

const Layout=({children})=> {
  return (
    <div className="min-h-screen bg-black text-white">
      {children}
      <BottomTabs/>
    </div>
  )
}

export default Layout