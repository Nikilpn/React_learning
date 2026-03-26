import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Forms extends Component {
    handleChange=(event)=>{
        // console.log(event.target.value);
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }


    Onsubmit=()=>{
        console.log(this.state)

    }


    state={
        firstname:'',
        lastname:''
    };

  render() {
    return (
      <div>
        <form action="">
            <h1>form component</h1>
            <input type="text" name='firstname' value={this.state.firstname} onChange={this.handleChange}/>
            <input type="text" name='lastname'  value={this.state.lastname} onChange={this.handleChange}/>
            <button type='button' onClick={this.Onsubmit}>buttons</button>
        </form>
        
      </div>
    )
  }
}
