import React, { Component } from 'react'



class Counter extends Component {

    state={
        counter:0,
    };

    onincrement=()=>{
        this.setState(
            {
                counter:this.state.counter+1
            }
        )
  
    };


    ondecrement=()=>{
        this.setState(
            {counter:this.state.counter-1}
        )
    };



    render() {
        return (
            <div>
                <h3>{this.state.counter}</h3>
                <h2>counter component</h2>
                <button onClick={this.onincrement}>+</button>
                <button onClick={this.ondecrement}>-</button>

            </div>
        )
    }
}
export default Counter;