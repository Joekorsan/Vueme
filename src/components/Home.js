import React, { Component } from 'react';
import FriendList from './FriendList';
import ActiveChannelList from './ActiveChannelList';
import Search from './Search';
import Title from './Title.js'
class Home extends Component {
  clickedVideo = ()=>{
    this.props.clickedVideo();
  }
  render() {
    return (
      <div className="ContainerHome">
        {/* <Search /> */}
        <FriendList />
        <Title />
        <ActiveChannelList videoClicked={()=>this.clickedVideo()}/>
      </div>
    );
  }
}

export default Home;
