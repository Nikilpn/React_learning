import React, { Component } from 'react'

import './Todoapp.css'

export default class Todoapp extends Component {

  state={
    input:""
  };

  handleChange=()=>{};


  render() {
    return (
      <div className='todo-container'>
  
        <form className='input-section'>
          <h1>TodoApp</h1>
          <input type="text" onChange={this.handleChange} placeholder='Enter Items'/>
     
        </form>

        <ul>
          <li>item <i className="fa-solid fa-trash"></i>
          
          
          </li>

          <li>item</li>
        </ul>
      
         
      </div>
    )
  }
}
