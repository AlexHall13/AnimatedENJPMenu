import React, { Component } from "react";
import './MenuButton.css';
 
class MenuButton extends Component {
  render() {
    return (
      <button id="roundButton"
              onMouseUp={this.props.handleMouseDown}></button>
    );
  }
}
 
export default MenuButton;