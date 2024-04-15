import React, { Component } from 'react'

export default class HomeComponent extends Component {
  render() {    
    return (
      <>
      <div className='container'>
        <h1>Quiz App</h1>
        <button className='playbutton'  onClick={this.clickplay}>Play</button>
      </div>
      </>
    )
  }
}