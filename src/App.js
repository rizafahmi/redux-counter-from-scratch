import React from 'react'
import { connect } from 'react-redux'

import { getDecrementAction, getIncrementAction } from './actions'

class App extends React.Component {
  componentDidMount () {
  }
  render () {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.props.counter}</h2>
        <button onClick={this.props.doIncrement}>+</button>
        <button onClick={this.props.doDecrement}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doIncrement: () => dispatch(getIncrementAction()),
    doDecrement: () => dispatch(getDecrementAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
