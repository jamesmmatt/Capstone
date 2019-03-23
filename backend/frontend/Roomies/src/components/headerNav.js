import React, { Component } from 'react';

class HeaderNav extends Component {
    render() {
        return (
            <div className='header-nav'>
                <div className='header-nav__tabs'>
                {
                    this.props.tabs.map((tab, index) => {
                        const className = `header-nav__tab ${tab.active ? 'header-nav__active' : ''}`;
                        return <a onClick={() => this.props.handleTabChange(tab.title)} className={className}>{tab.title}</a>
                    })
                }
                </div>                
                    {
                        this.props.tabs.map((tab, index) => {
                            if(tab.active) {
                                return (
                                    <div key={index} className='header-nav__content'>
                                        {tab.component}
                                    </div>
                                )
                                
                            }
                        })
                    }
            </div>
        )
    }
}

export default HeaderNav;