import React from "react";

class Reply extends React.Component{
    render(){
        return(
        <div className='border-top p-2 replyDisplay'>
            <div className="d-flex align-items-center">
                <h5 className="ml-2 font-weight-bold d-inline-block">{this.props.reply.name}</h5>
                &nbsp;
                <span className="ml-2 text-muted">@{this.props.reply.username}</span>
            </div>
            <p>{this.props.reply.text}</p>
        </div>
        )
    }
}

export default Reply;