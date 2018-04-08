import React, { Component } from 'react';
import Channel from './Channel'
class ActiveChannelList extends Component {
  vidClick = (url) =>{
    this.props.videoClicked(url);
  }
  render() {
    let list = this.props.channelList;
    list = list.map((value,indx)=>{
      return <Channel key={indx} url={value} videoClicked={(url)=>this.vidClick(url)}/>
    });
    return (
      <div  class="video-list grid-col-3 grid-row-2">
        {list}
        {/* <div class="add-video grid-col-1">
          <div class="item-center hover-pointer">+ </div>
        </div> */}
      </div>
    );
  }
}

export default ActiveChannelList;
