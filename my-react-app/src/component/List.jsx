import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class List extends PureComponent {
  static propTypes = {
    prop: PropTypes
  }

  state={
    score:4,
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

  incrementScore=()=>
    {
        this.setState({
            score:8
        });
    }
  

  render()
   
  

  {
    console.log(this.state.score)

    return (
        
      <div>
           

        <ul>
            {this.state.data.map((value,index)=>(

                

                <li key={index}>
                   {value.id}---{value.name}---{value.age}
                </li>
                


            ))}
        </ul>

        <button onClick={this.incrementScore}>click here</button>
        
      </div>
    )
  }
}
