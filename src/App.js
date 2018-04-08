import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import socketIOClient from 'socket.io-client';
import InputMessage from './components/InputMessage';
import MessageList from './components/MessageList';
import ChannelContainer from './components/ChannelContainer';

import axios from 'axios';

class App extends Component {

    state = {
      endpoint:"http://localhost:8080",
      message:'',
      messageList:[],
      videoIsShowing: false
    }

    addMessage = (newMessage) => {
      console.log(newMessage);
      this.setState({
        message: newMessage,
        messageList:[...this.state.messageList, newMessage]
      });
      this.send(newMessage);
    }
    send = (newMessage) => {
      console.log('newMessage' ,  newMessage);
      const socket = socketIOClient(this.state.endpoint)
      socket.emit('send message', {
        message: newMessage,
        messageList: this.state.messageList,
      });
    }

    toggleVideo = () =>{
      let videoIsShowing = !this.state.videoIsShowing;
      console.log("called");
      this.setState({videoIsShowing})
    }

    render() {
      console.log("msgList",this.state.messageList);
      const socket = socketIOClient(this.state.endpoint)
      socket.on('new message', (message) => {
        console.log('message recieved!', this.state.messageList, message)
        this.setState({
          messageList: message
        });
      });
      let content = this.state.videoIsShowing ? <ChannelContainer addMessage={this.addMessage} msgList={this.state.messageList}/> :  <Home clickedVideo = {()=>this.toggleVideo()}/>;
      return (
        <div className="">
          <div className='nav-bar bg-transparent color-white'>
            <div className="logo font-large" onClick={()=>{this.toggleVideo()}}>VM</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="login" onclick="">Noel</div>
          </div>
        {content}
        </div>
      );
    }
}

export default App;
