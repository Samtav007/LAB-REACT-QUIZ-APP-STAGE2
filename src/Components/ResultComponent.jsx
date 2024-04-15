import React, { Component } from 'react'

export default class ResultComponent extends Component {
  render() {
    return (
      <div className='resultContainer'>
        <h1 className='Result'>Result</h1>
        <div className='quizBox'>
            <h2>You need more practice!</h2>
            <h1 className='score'>Your Score is 20%</h1>

            <div className='stats'>
                <div className='stat'>
                    <span>Total number of questions</span>
                    <span className='num'>15</span>
                </div>
                <div className='stat'>
                    <span>Number of attempted questions</span>
                    <span className='num'>5</span>
                </div>
                <div className='stat'>
                    <span>Number of correct answers</span>
                    <span className='num'>2</span> 
                </div>
                <div className='stat'>
                    <span>Number of wrong answers</span>
                    <span className='num'>3</span>
                </div>
            </div>
        </div>

        <div className='Controls'>
            <button className="playagain">Play Again</button>
            <button className="home">Back to Home</button>
        </div>

    </div>

    )
  }
}