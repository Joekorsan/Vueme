import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import socketIOClient from 'socket.io-client';
import InputMessage from './components/InputMessage';
import MessageList from './components/MessageList';
import axios from 'axios';

class App extends Component {

    state = {
      endpoint:"http://localhost:8080",
      message:'',
      messageList:[]
    }

    addMessage = (newMessage) => {
      this.setState({
        message: newMessage,
        messageList:[...this.state.messageList, newMessage]
      });
      this.send(newMessage);
    }

    send = (newMessage) => {
      console.log(newMessage);
      const socket = socketIOClient(this.state.endpoint)
      socket.emit('send message', {
        message: newMessage,
        messageList: this.state.messageList
      });
    }



    render() {
      const socket = socketIOClient(this.state.endpoint)
      socket.on('new message', (message) => {
        console.log('message recieved!', this.state.messageList, message)
        this.setState({
          messageList: message
        });
      });

      return (
        <div className="">
          <div className='nav-bar bg-transparent color-white'>
            <div className="logo font-large">VM</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="login" onclick="">Noel</div>
          </div>
          <Home />
          {/* <InputMessage addMessage={this.addMessage} />
          <MessageList messageList={this.state.messageList} /> */}
        </div>
      );
    }
}

export default App;
