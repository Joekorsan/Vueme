import React, { Component } from 'react';
import Channel from './Channel'
class ActiveChannelList extends Component {
  render() {
    return (
      <div  class="video-list grid-col-3 grid-row-2">
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <Channel />
        <div class="add-video grid-col-1">
          <div class="item-center hover-pointer">+ </div>
        </div>
      </div>
    );
  }
}

export default ActiveChannelList;
