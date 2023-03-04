import React, { Component } from 'react';

export default class Clock extends Component {
        //  Old way full-form
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date() };
  // }

        // Old way short form 
  state = { date: new Date() };
  
  componentDidMount() {
    this.clockTimer = setInterval( () => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  } 
  
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1 className=''>
            <span className='text'>{this.state.date.toLocaleTimeString(this.props.locale)}</span>
        </h1> 
      </div>
    )
  }
}

  