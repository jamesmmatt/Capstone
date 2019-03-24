import React, { Component } from 'react';

import HeaderNav from './headerNav';
import UtilitiesTab from './tabs/utilitiesTab';
import RentTab from './tabs/rentTab';
import ChatTab from './tabs/chatTab';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    title: "Utilities",
                    active: true,
                    component: <UtilitiesTab/>
                },
                {
                    title: "Chat",
                    active: false,
                    component: <ChatTab/>
                },
                {
                    title: "Rent",
                    active: false,
                    component: <RentTab/>
                }
            ]
        }
    }

    handleTabChange = (title) => {
        const tabs = this.state.tabs;

        tabs.map(tab => {
            tab.active = false;
            if(tab.title == title) {
                tab.active = true;
            }
        })
        this.setState({ tabs });
    }

    render() {
        return (
            <div className='home'>
                <HeaderNav handleTabChange={(title) => this.handleTabChange(title)} tabs={this.state.tabs}/>
            </div>
        )
    }
}

export default Home;