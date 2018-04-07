import React, { Component } from 'react';
import FriendList from './FriendList';
import ActiveChannelList from './ActiveChannelList';
import Search from './Search';

class Home extends Component {
  render() {
    return (
      <div>
        <Search />
        <FriendList />
        <ActiveChannelList />
      </div>
    );
  }
}

export default Home;
