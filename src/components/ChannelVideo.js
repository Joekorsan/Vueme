import React,{Component} from 'react'
import YouTube from 'react-youtube';
class ChannelVideo extends Component{
  state = {
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
    twinPlay = () => {
      this.state.player.playVideo()
      // let setTime = Date.now()+2000 - this.state.dateNow;
      // setTimeout(()=>{this.state.player.playVideo()}, setTime);
    }
    pause = () => {
      this.state.player.pauseVideo()
      // let setTime = Date.now()+2000 - this.state.dateNow;
      // setTimeout(()=>{this.state.player.previousVideo()}, setTime);
    }
    stop = () => {
      this.state.player.stopVideo()
      // let setTime = Date.now()+2000 - this.state.dateNow;
      // setTimeout(()=>{this.state.player.previousVideo()}, setTime);
    }
    onReady = (event)=> {
      this.setState({
        player: event.target
      })
    }
    twinPlay = () => {
      this.state.player.playVideo()
      // let setTime = Date.now()+2000 - this.state.dateNow;
      // setTimeout(()=>{this.state.player.playVideo()}, setTime);
    }
    pause = () => {
      this.state.player.pauseVideo()
      // let setTime = Date.now()+2000 - this.state.dateNow;
      // setTimeout(()=>{this.state.player.previousVideo()}, setTime);
    }
    stop = () => {
      this.state.player.stopVideo()
    }
    onReady = (event)=> {
      this.setState({
        player: event.target
      })
    }

  render(){
    return(
      <div className="video-view grid-col-1 grid-row-2">
        {/* <iframe src="https://www.youtube.com/embed/M7q9hz-QpxA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
        <button onClick={this.twinPlay}>Play</button>
        <button onClick={this.pause}>Pause</button>
        <button onClick={this.stop}>Stop</button>
      <YouTube
            key="212cdsdc121"
            videoId="M7q9hz-QpxA"
            opts={this.state.opts1}
            onReady={this.onReady}
      />

      </div>
    )
  }
}



export default ChannelVideo
