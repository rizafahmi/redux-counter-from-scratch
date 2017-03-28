import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import './index.css'
import { counterReducer, nameReducer } from './reducers'

const allReducers = combineReducers({
  name: nameReducer,
  counter: counterReducer
})

const initialState = {
  counter: 10,
  name: 'New Guy'
}
const store = createStore(allReducers, initialState)

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
