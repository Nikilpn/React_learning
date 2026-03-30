import React, { Component } from 'react'

import './Todoapp.css'

export default class Todoapp extends Component {


  state = {
    input: "",
    items: []
  };

  handleChange = event => {
    this.setState({
      input: event.target.value


    });

  };

  storeItems = event => {

    event.preventDefault();
    const { input } = this.state;

    this.setState(
      {
        items: [...this.state.items, input],
        input: ""
      }
    )

  };
  deleteItem=key=>{
    const allitems=this.state.items;
    allitems.splice(key,1)

    this.setState(
      {
        item:allitems
      }
    )
  }

  render() {
    const { input, items } = this.state;

    console.log(items)


    return (
      <div className='todo-container'>

        <form className='input-section' onSubmit={this.storeItems}>
          <h1>TodoApp</h1>
          <input type="text" value={input} onChange={this.handleChange} placeholder='Enter Items' />

        </form>

        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i className="fa-solid fa-trash" onClick={() => this.deleteItem(index)}></i>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}

