import React, {Component} from 'react'
import axios from 'axios';

class Title extends Component {
  state ={
    url : ''
  }
  onSubmit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:8080/channel/create',{url:this.state.url})
    .then((result)=>{
      console.log("success");
    })
  }
  onChange = (e)=>{


    let url = e.target.value;
    this.setState({url});
    console.log("called");
  }
  render(){
    return(
      <div class="title  item-top  text-center color-white font-mild ">
        Open Channels<br />
        <form className="form" onSubmit={(e)=>this.onSubmit(e)}>
          <input className="" type="text" placeholder="Start Channel - Enter Youtube URL" onChange={this.onChange}/>
          <input type="submit" value="CREATE CHANNEL"></input>
        </form>
      </div>
    )

  }
}

export default Title
