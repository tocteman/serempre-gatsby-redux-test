import { createStore, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

// let window: any;

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


const initialState = { count: 0 }

let isWindowAvailable: boolean = true
let composeEnhancers: any
if (typeof window === undefined ){
  isWindowAvailable = true
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const reduxStore =  createStore(persistedReducer, initialState, (isWindowAvailable? composeEnhancers : null))
const persistor = persistStore(reduxStore)
export { reduxStore, persistor }

