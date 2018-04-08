import React, { Component } from 'react';
import FriendList from './FriendList';
import ActiveChannelList from './ActiveChannelList';
import Search from './Search';
import Title from './Title.js'
class Home extends Component {
  clickedVideo = (url)=>{
    this.props.clickedVideo(url);
  }
  render() {
    return (
      <div className="ContainerHome">
        {/* <Search /> */}
        <FriendList />
        <Title />
        <ActiveChannelList channelList={this.props.channelList} videoClicked={(url)=>this.clickedVideo(url)}/>
      </div>
    );
  }
}

export default Home;
