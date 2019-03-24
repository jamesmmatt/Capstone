import React, { Component } from 'react';
import history from '../../history';
class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1 className='header-roomies'>Roomies</h1>
                <div className='header__logout'>
                    <a onClick={() => history.push('/')}>logout</a>
                </div>
            </div>
        )
    }
}

export default Header;