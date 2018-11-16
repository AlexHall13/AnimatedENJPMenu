import React, { Component } from "react";
import "./Menu.css";
 
class Menu extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <h2><span lang="ja">自宅 </span>Home<span lang="en"></span></h2>
        <h2><span lang="ja">買い手 </span>Market<span lang="en"></span></h2>
        <h2><span lang="ja">ログイン </span>Login<span lang="en"></span></h2>
        <h2><span lang="ja">買ンいイ </span>About<span lang="en"></span></h2>
      </div>
    );
  }
}
 
export default Menu;