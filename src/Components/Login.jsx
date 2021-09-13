import React, { Component } from "react";
import { Button,Form,FormGroup,Input,Label} from 'reactstrap';
import "../Login.css";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }

  // Load Users
  async componentDidMount() {
    const response = await fetch('http://jsonplaceholder.typicode.com/users')
    if(response.ok){
        const users = await response.json();
        var userData = [];
        // console.log(JSON.stringify(users));
        users.forEach(element => {
            userData.push({id:element.id, name: element.name, email: element.email, password: element.address.zipcode});
        });
        this.setState({userList: userData});
        localStorage.setItem('users',JSON.stringify(this.state.userList));
    }else{
        console.log('Error while fetching data from /users');
    }
  }

  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };
 
  login = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    this.state.userList.some(element => {
      if(user_id === element.email && user_password === element.password){
        console.log('LoggedIn');
        localStorage.setItem("token", "T");
        localStorage.setItem('loggedInUser',JSON.stringify({id: element.id, name: element.name, email: element.email}));
        this.setState({
          islogged: true
        });
        event.preventDefault();
        return true;
      }
    });
  };

  render() {
    const Signup = () => {
      console.log('Signup');
      return <Redirect to="/signup" />;
    }

    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="loginDiv">
        <Form onSubmit={this.login} className="form">
          <div className="form-inner">
            <h2>Media App Login</h2>
            <FormGroup>
              <Label for="user_id">Username</Label>
              <Input
                type="text"
                name="user_id"
                onChange={this.handleFormChange}
                placeholder="Enter Username"
              />
            </FormGroup>
            <FormGroup>
              <Label for="user_password">Password</Label>
              <Input
                type="password"
                name="user_password"
                onChange={this.handleFormChange}
                placeholder="Enter Password"
              />
            </FormGroup>
            <div className="row mt-3">
                <div className="col-md-3">
                    <Button color="primary" type="submit">LOGIN</Button>
                </div>
                <div className="col-md-9"></div>
            </div>
            <div className="row mt-3">
                <div className="col-md-9">
                    <p>Don't have an account ? <Button onClick={Signup}>Sign Up</Button></p>
                </div>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}
export default Login;