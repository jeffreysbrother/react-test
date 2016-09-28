import React, { Component } from 'react';
import './Another.css';

class Another extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1>I guess this is my second 'component'</h1>
        <h2 className="pink">do styles associated with h2 elements affect ALL h2s?</h2>
        <p>Yes, apparently styles are not isolated ... so I guess we need to use classes</p>
        <hr />
      </div>
    );
  }
}

export default Another;
