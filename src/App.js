/* global fetch */
import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import {
  getDecrementAction,
  getIncrementAction,
  setNameAction
} from './actions'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Someone'
    }
  }
  handleSetName () {
    // Random some number
    const randomNumber = _.random(1, 50)
    // Fetch data
    fetch(`http://swapi.co/api/people/${randomNumber}`)
      .then(response => response.json())
      .then(data => {
        this.props.setName(data.name)
      })
      .catch(err => console.log(err))
  }
  render () {
    return (
      <div>
        <h1>Counter {this.props.name}</h1>
        <h2>{this.props.counter}</h2>
        <button onClick={this.props.doIncrement}>+</button>
        <button onClick={this.props.doDecrement}>-</button>
        <button onClick={this.handleSetName.bind(this)}>Set Name</button>
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
    setName: (name) => dispatch(setNameAction(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
