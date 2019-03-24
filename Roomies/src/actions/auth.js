import { ROOT_URL } from '../config';
import axios from 'axios';

import {
    STORE_USER
} from './types';


export function signUp(fields, success) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}api/users/`, fields)
            .then(fields => {
                dispatch({
                    type: STORE_USER,
                    payload: fields.email
                })
                success();
            })
            .catch(err => {
                if(err) { console.log(err) }
            })
    }
}