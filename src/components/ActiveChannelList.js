import React, { Component } from 'react';
import Channel from './Channel'
class ActiveChannelList extends Component {
  vidClick = () =>{
    console.log("another")
    this.props.videoClicked();
  }
  render() {
    let list = [0,1,2];
    list = list.map((value,indx)=>{
      return <Channel key={indx} videoClicked={()=>this.vidClick()}/>
    });
    return (
      <div  class="video-list grid-col-3 grid-row-2">
        {list}
        <div class="add-video grid-col-1">
          <div class="item-center hover-pointer">+ </div>
        </div>
      </div>
    );
  }
}

export default ActiveChannelList;
