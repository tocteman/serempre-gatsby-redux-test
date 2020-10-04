import React from "react"
import { connect } from "react-redux"
import Layout from "../components/Layout"


let nav = navigator?.geolocation || null

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const Counter = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)



const Home = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-red-500 text-5xl font-bold text-center">
      <ConnectedCounter />
      a ver
    </div>
    </Layout>
  )
}

export default Home