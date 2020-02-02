import React from 'react';
import ramen from './images/ramen.jpg'

export default class Home extends React.Component {
  render() {
    return (
      <div className="main-content">
        <img src={ramen} className="banner" alt="ramen bowl" />
        <p className="text">"For a bowl of soul warming, slurp-able goodness,
         head to Ponsonby's hot new Ramen restaurant."<br />
        - The Denizen</p>
      </div>
    )
  }
}

