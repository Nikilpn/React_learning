import React, { Component } from 'react'

export default class Car extends Component {
    constructor(){
        super()
        this.state={
            car:"polo gt"
        }
    }


    //
    getName=(e)=>{
        console.log(e.target.value);
        {this.setState({car:e.target.value})}
        
    }

  render() {
    return (
      <div>
        <h1 className='text-danger'>This is my car component</h1>
        <h1>my car name is :<span className='text-danger'>{this.state.car}</span></h1>
        <label htmlFor="">Enter your car name</label>
        <input onChange={(event)=>this.getName(event)} type="text" className='form-control' />
        
      </div>
    )
  }
}
