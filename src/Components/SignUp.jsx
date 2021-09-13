import React, {Component} from "react";
import { Button,Form,FormGroup,Input,Label} from 'reactstrap';
import "../Login.css";

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: JSON.parse(localStorage.getItem('users')),
            isRegistered: false,
            loginParams: {
                name: "",
                user_id: "",
                user_password: ""
            }
        };
    }
    
      
    
    handleFormChange = event => {
        let loginParamsNew = { ...this.state.loginParams };
        let val = event.target.value;
        loginParamsNew[event.target.name] = val;
        this.setState({
            loginParams: loginParamsNew
        });
    };
    
    register = event => {
        let name = this.state.loginParams.name;
        let user_id = this.state.loginParams.user_id;
        let user_password = this.state.loginParams.user_password;
        let userListLength = this.state.userList.length;
        let id = (this.state.userList[userListLength -1]).id + 1;
        console.log('ID:',id);
        this.state.userList.push({id: id, name: name, email: user_id, password: user_password});
        localStorage.setItem('users',JSON.stringify(this.state.userList));
        this.setState({
            isRegistered: true
        });
        // event.preventDefault();
    };

    render() {
        return (
            <div className="loginDiv">
                <Form onSubmit={this.register} className="form">
                    <div className="form-inner">
                        <h2>Media App Registration</h2>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                onChange={this.handleFormChange}
                                placeholder="Enter Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="user_id">Email</Label>
                            <Input
                                type="email"
                                name="user_id"
                                onChange={this.handleFormChange}
                                placeholder="Enter Email"
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
                                <Button color="primary" type="submit">Register</Button>
                            </div>
                            <div className="col-md-9"></div>
                        </div>
                        {/* <div className="row mt-3">
                            <div className="col-md-9">
                                <p>Don't have an account ? <Button onClick={Signup}>Sign Up</Button></p>
                            </div>
                        </div> */}
                    </div>
                </Form>
            </div>
        );
    }
}

export default SignUp;