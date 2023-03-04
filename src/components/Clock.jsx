import React, { Component } from 'react';
import Button from './Button';

export default class Clock extends Component {
        //  Old way full-form
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date() };
  // }

        // Old way short form 
  state = { date: new Date(), locale: 'bn-BD' };
  
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

  handleClick = (locale) => {
    this.setState({
      locale: 'en-US'
    });
    // console.log("The button was clicked")
  }

  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className=''>
            <span className='text'>{date.toLocaleTimeString(locale)}</span>
        </h1> 
        <Button change={this.handleClick} locale={'en-US'} >Click here</Button>
      </div>
    )
  }
}

  