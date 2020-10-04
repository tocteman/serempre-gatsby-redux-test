import React from "react"
import Layout from "../components/Layout"
import GoogleMapReact from "google-map-react"

// interface AnyReactComponentProps = 

// const AnyReactComponent = ({ text:string }) => <div>{text}</div>;

const defaultProps = {
  center: {
    lat: -4.2700287999999995,
    lng: -79.2338259
  },
  zoom: 11
};

const UbicacionesPage=()=> {
  return (
    <Layout>
      <div className="h-64 w-100">
      <GoogleMapReact
    // bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_KEY}}
    bootstrapURLKeys={{key: "AIzaSyDVClmqTUwNiMZu028CfU-croeNXR0VAbI"}}
    defaultCenter={defaultProps.center}
    defaultZoom={defaultProps.zoom}
  >
      {/* <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      /> */}
    </GoogleMapReact>
      </div>
    </Layout>
  )
}

export default UbicacionesPage