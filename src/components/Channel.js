import React, { Component } from 'react';

class Channel extends Component {
  onClick = ()=>{
    console.log("check")
    this.props.videoClicked();
  }
  render() {
    return (
      <video controls className="item-center bg-light" onClick={()=> this.onClick()}>Video 1
      </video>
    );
  }
}

export default Channel;
