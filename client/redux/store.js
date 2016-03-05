import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

let finalCreateStore = compose(
  applyMiddleware(thunk, logger()),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension()
    : f => f
  )(createStore)

export default function configureStore(initialState = { leaveType: {}, leaveInfo: {} }) {
  return finalCreateStore(rootReducer, initialState)
}
