import React, { Component } from 'react';
import FriendItem from './FriendItem'
class FriendList extends Component {
  render() {
    return (
      <div class="friendNav grid-col-4 grid-row-2 no-style text-center color-white font-mild">
        <FriendItem friendName="Noel"/>
        <FriendItem friendName="Joe"/>
        <FriendItem friendName="Hamman"/>
        <FriendItem friendName="ILikeKungFu"/>
      </div>
    );
  }
}

export default FriendList;
