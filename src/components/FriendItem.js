import React, { Component } from 'react';

class FriendItem extends Component {
  render() {
    return (
      <div class="friend-nav-pic item-center color-black grid-col-1">
        <div class="item-center text-center">{this.props.friendName}</div>
      </div>
    );
  }
}

export default FriendItem;
