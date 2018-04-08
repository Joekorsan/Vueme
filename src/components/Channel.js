import React, { Component } from 'react';

class Channel extends Component {
  onClick = ()=>{
    console.log("check")
    this.props.videoClicked(this.props.url);
  }
  render() {
    console.log('ur',this.props.url)
    return (
      <video controls className="item-center bg-light" src={this.props.url} onClick={()=> this.onClick()}>Video 1
      </video>
    );
  }
}

export default Channel;
