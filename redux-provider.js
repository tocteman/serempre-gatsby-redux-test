import React from "react"
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'

import {reduxStore, persistor} from "./src/state/initialStore"



export default ({ element }) => {
  const store = reduxStore
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {element}
      </PersistGate>
    </Provider>

  )
    
}