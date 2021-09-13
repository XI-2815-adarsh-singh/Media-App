import React from "react";
import { Button } from "reactstrap";

class PostInput extends React.Component{
        
    render(){
      return(
      <div className="col-sm-12 mt-1">
          <Button color="primary" onClick={this.props.replyWindowOpen}>Comment</Button>
      </div>
  
      )
    }
}

export default PostInput;