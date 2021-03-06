import React from "react";
import Post from "./Post";

class Feed extends React.Component{
    render(){
        
        return(
          <div>
            {this.props.postData.map((post, key) => 
                <Post postData={post} key={post.id}/>
            )}
          </div>
        )
     
    }
}

export default Feed;