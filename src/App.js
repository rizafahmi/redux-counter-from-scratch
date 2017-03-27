import React from 'react'
import { createStore } from 'redux'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch({
  type: 'INCREMENT'
})

const App = (props) => {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => store.dispatch({type: 'INCREMENT'})}>+</button>
      <button>-</button>
    </div>
  )
}

export default App
