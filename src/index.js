import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import './index.css'
import { counterReducer, nameReducer } from './reducers'
import { loadState, saveState } from './localStorage'

const allReducers = combineReducers({
  name: nameReducer,
  counter: counterReducer
})

const initialState = loadState()
const store = createStore(allReducers, initialState)

store.subscribe(() => {
  saveState(store.getState())
})

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
