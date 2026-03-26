import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class List extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state={
    data:[
        {
            id:1,
            name:"john",
            age:34
        },
        {
            id:2,
            name:"maria",
            age:44
        }
    ]
  };

  render() {
    return (
      <div>

        <ul>
            {this.state.data.map((value,index)=>(

                

                <li key={index}>
                   {value.id}---{value.name}---{value.age}
                </li>


            ))}
        </ul>
        
      </div>
    )
  }
}
