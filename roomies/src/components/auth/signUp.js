import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import {ROOT_URL} from '../../config';

import SignUpForm from './signUpForm';

const alreadyUsed = "";
class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          activeItem: {
            fullname: "",
            email: "",
            password: "",
            userUsed: ""
          },
          users: []
        };
      }

componentDidMount() {
    this.fetchUsers();
}

fetchUsers = () => {
    axios
        .get(`${ROOT_URL}api/users/`)
        .then(res => this.setState({ users: res.data }))
        .catch(err => console.log(err));
};

createUser = (fields) => {
    axios
        .post(`${ROOT_URL}api/users/`, fields)
        .catch(err => console.log(err));
};

onSubmit = (fields) => {    
    let userExists = false;
    this.state.users.map(user => {
        if (fields.email.toLowerCase() == user.email.toLowerCase()) {
            console.log("User already exists");
            userExists = true;
        }
    })          

    if(!userExists) {
    this.props.signUp(fields, () =>{
        console.log('navigate');
    });
    this.props.history.push('/home')
    }
    else{
       this.setState({userUsed: "This Email has already been registered"});
    }


    // let userExists = false;
    // this.state.users.map(user => {
    //     if (fields.email.toLowerCase() == user.email.toLowerCase()) {
    //             console.log("User already exists");
    //             userExists = true;
    //     }     
    // })
    // if(!userExists) {
    //     // this.createUser(fields);
    //     this.props.history.push('/home');
    // }
    // else{
    //    this.setState({userUsed: "This Email has already been registered"});
    // }
}

    render() {
        return (
            <div className='sign-up'>
                <h1 className='sign-up__heading'>Sign Up</h1>
                <div className='line'></div>
                <SignUpForm onSubmit={(event) => this.onSubmit(event)}/>
                <div className="sign-up__user">
                    {this.state.userUsed}
                </div>
            </div>
        )
    }
}

export default connect(null ,actions)(SignUp);