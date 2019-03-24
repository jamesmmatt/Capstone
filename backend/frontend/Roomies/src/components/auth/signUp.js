import React, { Component } from 'react';

import axios from "axios";

import * as root from '../../actions/types';

const ROOT_URL = root.ROOT_URL;

import SignUpForm from './signUpForm';

console.log(ROOT_URL);

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
        // this.createUser(fields);
        this.props.history.push('/home');
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