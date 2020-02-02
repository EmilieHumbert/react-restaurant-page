import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div class="main-content">
        <div class="findus">
          <h3 class="adressTitle">Our address</h3>
          <p class="address">119 Manchester Street,<br />
            Shop 916A Church Junction,<br />
            Christchurch, New Zealand</p>
          
            <h3 class="contactusTitle">Contact us</h3>
            <p class="contactus">ramen@ramen.com<br />
              0210 888 8888</p>

            <h3 class="hoursTitle">Opening Hours</h3>
            <p class="hours">Monday - Sunday<br />
              10am - 8:30pm</p>
        </div>
      </div>
    )
  }
}
