import React, { Component } from 'react';
import FriendList from './FriendList';
import ActiveChannelList from './ActiveChannelList';
import Search from './Search';

class Home extends Component {
  render() {
    return (
      <div className="ContainerHome">
        {/* <Search /> */}
        <FriendList />
        <div class="title  item-top  text-center color-white font-mild ">
          Recommended Videos
        </div>
        <ActiveChannelList />
      </div>
    );
  }
}

export default Home;
