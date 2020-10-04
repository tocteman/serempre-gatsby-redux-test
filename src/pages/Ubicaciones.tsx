import React from "react"
import Layout from "../components/Layout"
import MapContainer from "../containers/MapContainer";

const UbicacionesPage=()=> {
  return (
    <Layout>
        <div className="h-3/4-screen w-4/5 border-2 border-black shadow">
        <MapContainer/>
      </div>
    </Layout>
  )
}

export default UbicacionesPage