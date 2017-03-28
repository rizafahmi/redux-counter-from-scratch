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

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: store.getState()
    }
  }
  componentDidMount () {
    store.subscribe(() => {
      this.setState({
        counter: store.getState()
      })
    })
  }
  render () {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={() => store.dispatch({type: 'INCREMENT'})}>+</button>
        <button>-</button>
      </div>
    )
  }
}

export default App
