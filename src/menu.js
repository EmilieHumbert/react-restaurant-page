import React from 'react';
import menu from './images/main_ramen_menu.jpg'

export default class Menu extends React.Component {
  render() {
    return (
      <div className="main-content">
        <img src={menu} className="mainMenu" alt="ramen menu" />
      </div>
    )
  }
}
