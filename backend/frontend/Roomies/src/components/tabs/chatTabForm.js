import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import { FormInputChat, FormButtonChat } from '../formFields';

class ChatTabForm extends Component {


    render() {

        const { handleSubmit } = this.props;
        return (
            <form id="use-to-clear" onSubmit={handleSubmit} className='chat-tab-form'>
                <Field
                    className="chat-tab-form__message" 
                    component={FormInputChat} 
                    placeholder='Enter Message' 
                    name='message' 
                    type='text'
                    // title='Message'
                />
                <Field
                    className="chat-tab-form__send" 
                    component={FormButtonChat} 
                    name='send' 
                    type='submit'
                    title='Send'
                />      
            </form>
            
        )
    }
}

ChatTabForm = reduxForm({
    form: 'chattabform'
})(ChatTabForm);

export default ChatTabForm;