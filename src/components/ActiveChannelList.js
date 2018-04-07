import React, { Component } from 'react';
import Channel from './Channel'
class ActiveChannelList extends Component {
  render() {
    return (
      <div>
        <Channel />
        <Channel />
      </div>
    );
  }
}

export default ActiveChannelList;
