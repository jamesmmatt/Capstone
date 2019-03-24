import React, { Component } from 'react';

import SignInForm from './signInForm';

import axios from "axios";

import * as root from '../../actions/types';

const ROOT_URL = root.ROOT_URL;
let incorrect = "";
class SignIn extends Component {

        constructor(props) {
            super(props);
            this.state = {
              activeItem: {
                fullname: "",
                email: "",
                password: "",
                incorrect: ""
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
    

    onSubmit = (fields) => {      
        this.state.users.map(user => {
            if (fields.email.toLowerCase() == user.email.toLowerCase()) {
                if(fields.password == user.password) {
                    this.props.history.push('/home');   
                }
            }     
        })
        console.log("Incorrect email or password");
        incorrect = this.setState({incorrect: "Incorrect email or password"});
    }


    render() {
        const incorrect = this.state.incorrect;
        return (
            <div className='sign-in'>
                <h1 className='heading'>Sign In</h1>
                {/* <div className='line'></div> */}
                <SignInForm onSubmit={(event) => this.onSubmit(event)}/>
                <div className="sign-in__signup">
                    <a className="sign-in__signup__new-user" onClick={() => this.props.history.push('/signup')}>New User?</a>
                </div>
                <div className="sign-in__incorrect">
                    {incorrect}
                </div>
            </div>
        )
    }
}


export default SignIn;