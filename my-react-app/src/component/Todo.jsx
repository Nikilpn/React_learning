import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todo extends Component {

  render() {
    return (
      <div>
        <h1>Todo component</h1>
        <h2>{this.props.mystringone}</h2>
        
      </div>
    )
  }
}
