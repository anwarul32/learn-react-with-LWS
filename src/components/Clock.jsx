import React, { Component } from 'react';

export default class Clock extends Component {
  render() {
    const { locale } = this.props;
    const { children } = this.props;
    return (
      <div>
        <h1 className=''>
            <span className='text'>{ children }- {new Date().toLocaleTimeString(locale)}</span>
        </h1> 
      </div>
    )
  }
}

