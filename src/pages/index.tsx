import React from "react"
import Layout from "../components/Layout"
import TodosContainer from "../containers/TodosContainer"

const Home = () => {

  return (
    <Layout>
      <div className="max-w-md text-4xl text-center">
        <h2 className="mb-8">¿Dónde dejé mi <span className="font-bold">pendiente</span>?</h2>
      </div>
      <TodosContainer />
    </Layout>
  )
}

export default Home