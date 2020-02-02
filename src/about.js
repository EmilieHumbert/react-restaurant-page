import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="aboutus">
          <h1 className="aboutusTitle">About us</h1>
          <p className="aboutRestaurant">Our story began in Hakata, the epicenter of the tonkotsu ramen movement.
            We are on a mission to provide our guests with the best tonkotsu ramen, using only the finest ingredients
            and the most advanced techniques developed by our master artisans.</p>
          <h2 className="aboutTonkotsuTitle">What's Tonkotsu?</h2>
          <p className="aboutTonkotsu">Tonkotsu ramen is a ramen dish that originated in Fukuoka, Fukuoka Prefecture
            on the Kyushu island of Japan, and it is a specialty dish in both Fukuoka and Kyushu. The soup broth is
            based on pork bones and other ingredients, which are typically boiled for several hours, and the dish is
            traditionally topped with sliced pork belly and served with ramen noodles that are hard in the center.
            In Fukuoka, Japan, tonkotsu ramen is referred to as Hakata ramen.</p>
        </div>
      </div>
    )
  }
}