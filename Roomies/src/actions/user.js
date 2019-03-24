import {
    SET_USER_UTILITIES,
    SET_USER_RENT
} from './types';

import axios from "axios";
const API = "http://localhost:8000/";

export function fetchUserUtilities() {
    axios
        .get(`${API}api/roomies`)
        .then(res => this.setState({ billList: res.data }))  
        .catch(err => console.log(err));
}

export function fetchUserRent() {
    return ({
        type: SET_USER_RENT,
        payload: [
            {
                _id: 0,
                title: 'Rent',
                amount: 1800
            }
        ]
    })
}