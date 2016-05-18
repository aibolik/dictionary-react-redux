const redux = require('redux');
const reducers = require('../reducers');
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()

module.exports = function(initialState) {
  const store = redux.createStore(reducers, initialState, redux.applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
