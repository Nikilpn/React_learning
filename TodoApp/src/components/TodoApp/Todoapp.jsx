import React, { Component } from 'react'

import './Todoapp.css'

export default class Todoapp extends Component {


  render() {
    return (
      <div className='todo-container'>
        <h1>TodoApp</h1>
        <div>
          <input type="text" />
          <button type='button'>submit</button>
        </div>

        <ul>
          <li>item</li>
        </ul>
      
         
      </div>
    )
  }
}
