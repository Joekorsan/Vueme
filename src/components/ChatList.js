import React, { Component } from 'react';

class ChatList extends Component {

  render() {
    let msgList = this.props.msgList;
    msgList = msgList.length
      ? msgList.map((message, indx) =>{
        return <li  key={indx} className="msg-foreign item-left grid-col-8 grid-row-1">
          <div className="rw-sz-2 col-sz-1 item-left">
            <img className="user-pic edges-weak  " src="https://image.flaticon.com/icons/png/128/149/149072.png"></img>
          </div>
          <div className="item-left col-sz-3">{message}</div>
        </li>
    })
      : 'no messages at this time';


    return (
      <div className="msg-container grid-col-1 no-style color-white font-mild">
        {msgList}
        {/* <li className="msg-user item-right grid-col-8 grid-row-1">
          <div className="item-center col-sz-7">The Video Wasnt That Great!</div>
          <div className="rw-sz-2 col-9 item-right">
            <img className="user-pic edges-weak  " src="profile_pic.jpg"></img>
          </div>
        </li> */}
      </div>
    );
  }
}

export default ChatList;
