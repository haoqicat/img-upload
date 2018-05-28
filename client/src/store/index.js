import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'

let middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger')
  middleware = [...middleware, logger]
}

export default createStore(reducer, applyMiddleware(...middleware))
