import React from 'react'
import './App.css'

class App extends React.Component {
  increment = this.increment.bind(this)
  Decrement = this.Decrement.bind(this)

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  Decrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  render() {

    return (
      <div>
        <h3>Counter Redux : {this.state.count} </h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
      </div >
    )
  }
}

export default App
