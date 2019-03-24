import React, { Component } from 'react';
import axios from "axios";

import * as root from '../../actions/types';
import ChatTabForm from './chatTabForm';

const ROOT_URL = root.ROOT_URL;

class ChatTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
          activeItem: {
            group: "",
            name: "",
            message: ""
          },
          messages: []
        };
      }

    componentDidMount() {
        this.fetchMessages();        
    }

    componentWillUpdate() {
        this.fetchMessages();
    }

    fetchMessages = () => {
        axios
            .get(`${ROOT_URL}api/messages/`)
            .then(res => this.setState({ messages: res.data }))
            .catch(err => console.log(err));
    }

    createMessage = (fields) => {
        var messagePost = new Object();
        messagePost.group = 0;
        messagePost.name = 'Braden B';
        messagePost.message = fields.message;
        
        axios
            .post(`${ROOT_URL}api/messages/`, messagePost)
            .catch(err => console.log(err));
    };

    onSubmit = (fields) => {
        console.log(fields);
        // this.createMessage(fields);
        document.getElementById("use-to-clear").message.value = "";
    }
    

    render() {
        const messageItems = this.state.messages.map(message => <div className='chat-tab__message'><li>{message.name}: {message.message}</li></div>);
        return (
            <div className="chat-tab">
                <div className="chat-tab__messages">
                    {messageItems}                
                </div>
                <div className="chat-tab__text-box">
                    <ChatTabForm onSubmit={(event) => this.onSubmit(event)}/>
                </div>
                
            </div>
        )
    }
}

export default ChatTab;