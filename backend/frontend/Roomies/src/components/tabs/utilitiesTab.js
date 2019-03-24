import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from "axios";

import {ROOT_URL} from '../../config';

class UtilitiesTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
          activeItem: {
            bill: "",
            price: "",
          },
          billList: []
        };
      }

    componentDidMount() {
        this.fetchUserUtilities();
    }

    fetchUserUtilities= () => {
        axios
            .get(`${ROOT_URL}api/roomies/`)
            .then(res => this.setState({ billList: res.data }))  
            .catch(err => console.log(err));
    }

    render() { 
        let total = 0;
        this.state.billList.map(bill => {
            total += parseFloat(bill.price);
        })
        return (
            <div className="utilities-tab">
                {
                    this.state.billList.map(bill => {
                        return <div className="utilities-tab__utility">{bill.bill}: ${bill.price}</div>
                    })                    
                }
                <div className="utilities-tab__utility-total">Total payment: ${total}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { utilities } = state.user;
    return { utilities };
}

UtilitiesTab = connect(mapStateToProps, actions)(UtilitiesTab);

export default UtilitiesTab;