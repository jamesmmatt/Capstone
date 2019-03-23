import React, { Component } from 'react';

class ChatTab extends Component {
    render() {
        return (
            <div className="chat-tab">
                <div className="chat-tab__messages">
                    <div className="chat-tab__message">
                        Jonas S: I will get right on that.                    
                    </div>
                    <div className="chat-tab__message">
                        Matthew J: Jonas, you still owe me $77 for rent.                    
                    </div>
                    <div className="chat-tab__message">
                        Brenton E: I gotta study.
                    </div>
                    <div className="chat-tab__message">
                        Braden B: I'm going to the gym.
                    </div>
                    <div className="chat-tab__message">
                        Matthew J: I will go too.                 
                    </div>
                    <div className="chat-tab__message">
                        Jager S: Yea, I'll go.
                    </div>
                    <div className="chat-tab__message">
                        Dalton W: Do you guys wanna catch a movie tonight?
                    </div>
                </div>
                <div className="chat-tab__text-box">
                    <input className="chat-tab__text-box__box" name="text" placeholder="Enter Message"/>
                </div>
            </div>
        )
    }
}

export default ChatTab;