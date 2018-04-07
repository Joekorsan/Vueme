import React, { Component } from 'react';
import FriendItem from './FriendItem'
class FriendList extends Component {
  render() {
    return (
      <div>
        <FriendItem />
        <FriendItem />
      </div>
    );
  }
}

export default FriendList;
