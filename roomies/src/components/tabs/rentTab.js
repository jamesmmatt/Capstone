import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class RentTab extends Component {

    componentDidMount() {
        this.props.fetchUserRent
    }

    render() {        
        let totalForYear = 0;
        this.props.rent.map(r => {
            totalForYear = r.cost * 12;
        })        
        return (
            <div className="rent-tab">
                {
                    this.props.rent.map(r => {
                        return <div className="rent-tab__rent">{r.title}: ${r.cost}</div>
                    })
                }
                <div className="rent-tab__rent-total">One Year of Rent: ${totalForYear}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { rent } = state.user;
    return { rent };
}

RentTab = connect(mapStateToProps, actions)(RentTab);

export default RentTab;