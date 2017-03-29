import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import App from './App'
import './index.css'
import { counterReducer, nameReducer } from './reducers'
import { loadState, saveState } from './localStorage'

const allReducers = combineReducers({
  name: nameReducer,
  counter: counterReducer
})

const initialState = loadState()
console.log(logger)
const store = createStore(allReducers, initialState, applyMiddleware(logger))

store.subscribe(() => {
  saveState(store.getState())
})

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
