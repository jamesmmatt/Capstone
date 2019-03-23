import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import axios from "axios";

import SignUpForm from './signUpForm';


class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          activeItem: {
            fullname: "",
            email: "",
            password: false
          },
          users: []
        };
      }

componentDidMount() {
    this.fetchUsers();
}

fetchUsers = () => {
    axios
        .get("http://localhost:8000/api/users/")
        .then(res => this.setState({ users: res.data }))
        .catch(err => console.log(err));
};

createUser = (fields) => {
    axios
        .post("http://localhost:8000/api/users/", fields)
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
        this.createUser(fields);

    }
}

    render() {
        return (
            <div className='sign-up'>
                <h1 className='sign-up__heading'>Sign Up</h1>
                <div className='line'></div>
                <SignUpForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default SignUp;