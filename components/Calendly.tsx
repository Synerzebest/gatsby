"use client"

import React, { Component } from 'react';
import {InlineWidget} from 'react-calendly';

class Calendly extends Component {
  componentDidMount() {
    // whatever stuff you need here
  }
  componentWillUnmount() {
    // whatever cleanup stuff you need here
  }
  
  render(){
    return (
      <div className="calendly">
        <InlineWidget pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '00a2ff',
            textColor: '4d5055'
            }} url="https://calendly.com/mmagicfun" />
      </div>
    );
  }
}

export default Calendly;