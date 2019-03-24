import React, { Component } from 'react';

import Header from './header/header';
import Footer from './footer';


class Roomies extends Component {
  render() {
    return (
      <div className='roomies'>
        {this.props.children}
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default Roomies;