import {
    SET_USER_RENT
} from '../actions/types';

const INITIAL_STATE = {
    rent: [
        {
            _id: 0,
            title: 'Rent',
            cost: 1900
        }
    ]
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_USER_RENT:
            return {
                ...state,
                rent: action.payload
            }  
        default: return state;
    }
}