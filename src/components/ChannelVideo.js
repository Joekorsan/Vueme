import React,{Component} from 'react'
import YouTube from 'react-youtube';
import socketIOClient from 'socket.io-client';
class ChannelVideo extends Component{
  state = {
    endpoint:"http://localhost:8080",
    videoId: '',
    videoObj: {},
    player:null,
    dateNow: Date.now(),
    opts1: {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
          controls: 0
      }
    }
  }
  componentDidUpdate() {
    if(this.state.videoObj.status === "1"){
      this.state.player.playVideo()
    } else if (this.state.videoObj.status === "2"){
      this.state.player.pauseVideo()
    } else if (this.state.videoObj.status === "3"){
      this.state.player.stopVideo()
    }
  }
    send = (newobj) => {
      console.log('newObj' ,  newobj);
      const socket = socketIOClient(this.state.endpoint)
      socket.emit('send videoObj', newobj);
    }
    twinPlay = () => {
      this.state.player.playVideo()
      // let setTime = Date.now()+2000 - this.state.dateNow;
      // setTimeout(()=>{this.state.player.playVideo()}, setTime);
      this.setState({
         videoObj:{
           videoId: this.state.videoId,
           status: "1"
         },
       }, ()=> {
         this.send({
           videoId: this.state.videoId,
           status: "1"
         })
       });
    }
    pause = () => {
      this.state.player.pauseVideo()
      // let setTime = Date.now()+2000 - this.state.dateNow;
      // setTimeout(()=>{this.state.player.previousVideo()}, setTime);
      this.setState({
         videoObj:{
           videoId: this.state.videoId,
           status: "2"
         },
       }, ()=> {
         this.send({
           videoId: this.state.videoId,
           status: "2"
         })
       });
    }
    stop = () => {
      this.state.player.stopVideo()
      this.setState({
         videoObj:{
           videoId: this.state.videoId,
           status: "3"
         },
       }, ()=> {
         this.send({
           videoId: this.state.videoId,
           status: "3"
         })
       });
    }
    onReady = (event)=> {
      this.setState({
        player: event.target,
        videoId: this.props.url.replace("https://www.youtube.com/watch?v=",'')
      })
    }
  render(){
    console.log("this is it videoObj",this.state.videoObj);
    const socket = socketIOClient(this.state.endpoint)
    socket.on('new videoObj', (obj) => {
      console.log('obj recieved!', this.state.videoObj, obj)
      this.setState({
        videoObj: obj
      });
    });
    let key = this.props.url.replace("https://www.youtube.com/watch?v=",'')
    return(
      <div className="video-view grid-col-1 grid-row-2">
        {/* <iframe src="https://www.youtube.com/embed/M7q9hz-QpxA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
          <YouTube
                key="212cdsdc121"
                videoId={key}
                opts={this.state.opts1}
                onReady={this.onReady}
                className='youtube'
          />
          <div className="video-control-container item-right ">
            <button className="no-style" onClick={this.twinPlay}>Play</button>
            <button className="no-style" onClick={this.pause}>Pause</button>
            <button className="no-style"onClick={this.stop}>Stop</button>
          </div>
      </div>
    )
  }
}
export default ChannelVideo
