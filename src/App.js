import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
  componentDidMount () {
  }
  render () {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.props.counter}</h2>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps, null)(App)
