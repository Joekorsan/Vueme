import React,{Component} from 'react'

class ChatForm extends Component{

  state ={
    msg: ''
  }
  passMessage = (e) =>{
    e.preventDefault();
    this.props.passMessage(this.state.msg)
  }
  onChange = (e)=>{
    let msg = e.target.value;
    console.log(msg);
    this.setState({ msg } );
  }
  render(){
    return(
      <div>
        <form className='form' onSubmit={(e)=>{this.passMessage(e)}}>
          <input type="text" placeholder="Enter Message Here" onChange={this.onChange}/>
          <input type="submit" placeholder="Send Message"/>
        </form>
      </div>
    )
  }
}

export default ChatForm;
