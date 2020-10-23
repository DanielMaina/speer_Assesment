import React, { Component } from "react";

import '../App.css';
import { AiOutlineMenu } from "react-icons/ai";



export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="menu-wrap">
          <input type="checkbox"
                    className="toggler">
          </input>
          <AiOutlineMenu className="nav-icon"/>
        <div className="menu">
        <div>
        <div>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
          <ul>
            <li><a href="#red">Red</a></li>
          </ul>
        </div>
      </div>
        </div>
        <div className="menu-wrap-text">EXP|CON</div>
        </nav>          
    );
  }
}