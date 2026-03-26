import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Forms extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <form action="">
            <h1>form component</h1>
            <input type="text" />
        </form>
        
      </div>
    )
  }
}
