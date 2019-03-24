import React, { Component } from 'react';
import SignInForm from './signInForm';
import axios from "axios";
import {ROOT_URL} from '../../config';
import { connect } from 'react-redux';
import * as actions from '../../actions';
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
        this.setState({incorrect: "Incorrect email or password"});
    }


    render() {
        return (
            <div className='sign-in'>
                <h1 className='heading'>Sign In</h1>
                {/* <div className='line'></div> */}
                <SignInForm onSubmit={(event) => this.onSubmit(event)}/>
                <div className="sign-in__signup">
                    <a className="sign-in__signup__new-user" onClick={() => this.props.history.push('/signup')}>New User?</a>
                </div>
                <div className="sign-in__incorrect">
                    {this.state.incorrect}
                </div>
            </div>
        )
    }
}


export default connect(null ,actions)(SignIn);