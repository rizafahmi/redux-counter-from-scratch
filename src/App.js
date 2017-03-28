import React from 'react'
import { connect } from 'react-redux'

import {
  getDecrementAction,
  getIncrementAction,
  setNameAction
} from './actions'

class App extends React.Component {
  componentDidMount () {
  }
  render () {
    return (
      <div>
        <h1>Counter {this.props.name}</h1>
        <h2>{this.props.counter}</h2>
        <button onClick={this.props.doIncrement}>+</button>
        <button onClick={this.props.doDecrement}>-</button>
        <button onClick={this.props.setName}>Set Name</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doIncrement: () => dispatch(getIncrementAction()),
    doDecrement: () => dispatch(getDecrementAction()),
    setName: () => dispatch(setNameAction('Someone'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
