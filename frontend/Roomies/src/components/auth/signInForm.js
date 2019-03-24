import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

class SignInForm extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form  onSubmit={handleSubmit} className='sign-in-form'>
                <Field
                    className="sign-in-form__email" 
                    component={FormInput} 
                    placeholder='Email' 
                    name='email' 
                    type='email'
                />

                <Field
                    className="sign-in-form__password" 
                    component={FormInput} 
                    placeholder='Password' 
                    name='password' 
                    type='password'
                />
                
                <Field
                    className="sign-in-form__login" 
                    component={FormButton} 
                    name='login' 
                    type='submit'
                    title='Login'
                />
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'signin'
})(SignInForm);

export default SignInForm;