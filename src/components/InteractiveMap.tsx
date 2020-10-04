import React from "react"
import GoogleMapReact from "google-map-react"
import "../state/types"
import SimpleMarker from "./SimpleMarker"


const InteractiveMap = ({todos}) => {
  const mapProps = {
    center: {
      lat: todos?.length>0 && todos[0]?.location?.latitude !== 0 ? todos[0]?.location?.latitude : -3.2700287999999995,
      lng: todos?.length>0 && todos[0]?.location?.longitude !== 0  ? todos[0]?.location?.longitude : -79.2338259
    }, 
    zoom: 10
  }
  return (
    <GoogleMapReact
    bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_KEY}}
    defaultCenter={mapProps.center}
    defaultZoom={mapProps.zoom}
  >
    {todos.length>0 && todos.map((todo:Todo) => (
      <SimpleMarker
        key={todo.id}
        lat={todo?.location?.latitude}
        lng={todo?.location?.longitude}
        text={todo.title}
      >

      </SimpleMarker>
    ))}
    </GoogleMapReact>
  )
}

export default InteractiveMap


