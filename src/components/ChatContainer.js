import React, { Component } from 'react';
import ChatList from './ChatList'
import ChatForm from './ChatForm'


import ChannelVideo from './ChannelVideo'

class ChatContainer extends Component {
  passMessage = (msg)=>{
    console.log(msg);
    this.props.passMessage(msg);
  }
  render() {
    console.log('msgList', this.props.msgList)
    return (
      <div className="chat-container ">
        <ChatList msgList={this.props.msgList}/>
        <ChatForm passMessage={(msg)=>{ this.passMessage(msg)}}/>
      </div>
    );
  }
}

export default ChatContainer;
