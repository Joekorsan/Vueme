import React, { Component } from 'react';

class FriendItem extends Component {
  render() {
    return (
      <div class="friend-nav-pic item-center color-black grid-col-1" backgroundImage = "url('https://media.licdn.com/dms/image/C4E03AQG8zH-4TrlRHg/profile-displayphoto-shrink_200_200/0?e=1528390800&v=beta&t=55mQ2dXyO7kiYJpT0_gYXkEwgk7Q2DrL854vVf1R1fw')">
        <img src={this.props.source} ></img>
        <div class="item-center text-center color-white">{this.props.friendName}</div>
      </div>
    );
  }
}

export default FriendItem;
