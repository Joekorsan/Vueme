import React,{Component} from 'react'
import ChannelVideo from './ChannelVideo'
import ChatContainer from './ChatContainer'

class ChannelContainer extends Component{
  passMessage = (msg)=>{
    this.props.addMessage(msg);
    console.log(msg);
  }
  render(){
    return(
      <div className="container-channel">
        <div className="friendNav grid-col-4 grid-row-2 no-style text-center color-white font-mild">
          <div className="friend-nav-pic item-center"></div>
          <div className="friend-nav-pic item-center"></div>
          <div className="friend-nav-pic item-center"></div>
          <div className="friend-nav-pic item-center"></div>
        </div>
        <ChannelVideo url={this.props.url}/>
        <ChatContainer passMessage={(msg)=>this.passMessage(msg)} msgList = {this.props.msgList}/>
      </div>
    )
  }
}



export default ChannelContainer
