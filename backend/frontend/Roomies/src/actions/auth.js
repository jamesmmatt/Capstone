import users from '../database/users';
import { ROOT_URL } from '../config';
import {
    STORE_USER
} from './types';


export function signUp(fields, success) {
    users.users.push({"fullname" : fields.fullname, "email": fields.email, "password": fields.password})
    alerts.push({num : 3, app:'helloagain_again',message:'yet another message'});
    success();
}

export function signIn(fields, success) {


    // return function(dispatch) {
    //     axios.post(`${ROOT_URL}/signIn`, fields)
    //         .then(response => {
    //             dispatch({
    //                 type: STORE_USER,
    //                 payload: response.data
    //             })
    //             success();
    //         })
    //         .catch(err => {
    //             if(err) { console.log(err) }
    //         })
    // }
}