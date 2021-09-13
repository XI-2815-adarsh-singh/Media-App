import React from "react";

class ReplyField extends React.Component{
    constructor(props){
    super(props)
    
    this.state ={
      replyText: ''
    }
    
    this.updateReplyText = this.updateReplyText.bind(this)
    this.submitReply = this.submitReply.bind(this)
    this.id = 'replyField' + String(Math.floor(Math.random() * 100000))
  }
  
  updateReplyText(e){
    this.setState({
      replyText: e.target.value
    })
  }
  
  submitReply(){
    if(this.state.replyText.length > 0){
      this.props.post(this.state.replyText)
      document.getElementById(this.id).value = ''
      this.setState({
        replyText: ''
      })
    }
  }
  
    render(){
    
        return(
          <div className="row form-inline mt-2">
            <div className="col-md-10">
              <div className="input-group flex-grow-1">
                <div class="input-group-prepend">
                  <div class="input-group-text">@{this.props.replyName}</div>
                </div>
                <input type="text" onChange={this.updateReplyText} id={this.id} className="form-control"  placeholder="Say something nice!"/>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-danger" onClick={this.submitReply}><span>Reply</span></button>
            </div>
          </div>
        )
    }
}

export default ReplyField;