import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { change, children, locale } = this.props;
    return (
      <div>
        <button type='button' onClick={() => change(locale)}>
          {locale === 'bn-BD' ? 'Change Clock' : 'গড়ি পরিবর্তন করুন'}
        </button>
      </div>
    )
  }
}
