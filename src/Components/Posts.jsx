import React, {Component} from "react";
import UserFeed from "./posts/UserFeed";
import Feed from "./posts/Feed";

class Posts extends Component {
    constructor(props){
        super(props)
        
        this.state = {
          allPosts: [{
            title: 'LOADING',
            body: 'LOADING',
            name: 'LOADING',
            username: '@LOADING'
          }],
          
          userPosts: []
        }
        // The following function (this.sortPosts) is the Fisher-Yates (aka Knuth) Shuffle found in JS at
        // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        this.sortPosts = this.sortPosts.bind(this)
        this.matchAccounts = this.matchAccounts.bind(this)
        this.userPost = this.userPost.bind(this)
        
        this.loaded = false
        this.postDataWithoutUserInfo = []
        this.newUserPosts = []
    }
      
    componentDidMount(){
        
        if(this.loaded === false){
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(json => this.sortPosts(json))
          .then(()=>{
            return fetch('https://jsonplaceholder.typicode.com/users')
          })
          .then(response => response.json())
          .then(json => this.matchAccounts(json))
          .then(json => this.setState({ allPosts: json }))
          .catch(error=>console.log(error))
        }
        
        this.loaded = true
    }
      
    sortPosts(array){
        var currentIndex = array.length, temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        this.postDataWithoutUserInfo = array;
        return array;
    }
      
    matchAccounts(userData){
        let completeFeedData = []
        for(let i = 0; i < this.postDataWithoutUserInfo.length; i++){
          for(let j = 0; j < userData.length; j++){
            if(this.postDataWithoutUserInfo[i].userId === userData[j].id){
    
              completeFeedData.push({...this.postDataWithoutUserInfo[i], ...userData[j]})
            }
          }
        }
     
        return completeFeedData
    }
      
    userPost(post){
        let totalLength = this.state.allPosts.length + this.state.userPosts.length
        let newPostData = {
          userId: JSON.parse(localStorage.getItem('loggedInUser')).id,
          id: totalLength + 2,
          name: 'You',
          username: JSON.parse(localStorage.getItem('loggedInUser')).email,
          body: post,
          userPost: true
        }
        
        this.newUserPosts.unshift(newPostData)
        
        this.setState({
            userPosts: this.newUserPosts
        })
    }
    render(){
        
        return(
            <div>
                <div className="container">
                    <div className="row mt-2">
                        <div className="col">
                            <h3>Posts Available</h3>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <UserFeed postData={this.state.userPosts} />
                    <Feed postData={this.state.allPosts} />
                </div>
            </div>
        )
    }
}

export default Posts;