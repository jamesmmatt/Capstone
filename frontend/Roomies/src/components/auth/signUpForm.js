import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

class SignUpForm extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className='sign-up-form'>
                <Field
                    className="sign-up-form__fullname" 
                    component={FormInput} 
                    placeholder='Full Name' 
                    name='fullname' 
                    type='text'
                    title='Full Name'
                />
                
                <Field
                    className="sign-up-form__email" 
                    component={FormInput} 
                    placeholder='Email' 
                    name='email' 
                    type='email'
                    title='Email'
                />

                <Field
                    className="sign-up-form__password" 
                    component={FormInput} 
                    placeholder='Password' 
                    name='password' 
                    type='password'
                    title='Password'
                />          
                <Field
                    className="sign-up-form__sign-up" 
                    component={FormButton} 
                    name='signup' 
                    type='submit'
                    title='Sign Up'
                />      
            </form>
            
        )
    }
}

SignUpForm = reduxForm({
    form: 'signup'
})(SignUpForm);

export default SignUpForm;