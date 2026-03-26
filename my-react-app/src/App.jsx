import { Component, useState } from 'react'
import './App.css'
import Todo from './component/Todo';
import Counter from './component/Counter';
import Forms from './component/Forms';
import List from './component/List';






class App extends Component {
  state = {
    mystring: "hello",
    mystringone: "hello guyss"
  };

  handleChange=()=>{
    this.setState({
      mystringone:"Media"
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.mystring}</h1>



      <button onClick={this.handleChange}>click here</button>

      <Todo mystringone={this.state.mystringone}/>

      <Counter />

      <Forms />

      <List />

      </div>
    )
  }
}

export default App;
