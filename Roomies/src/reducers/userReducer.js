import {
    SET_USER_UTILITIES
} from '../actions/types';

const INITIAL_STATE = {
    utilities: [
        {
            _id: 0,
            title: 'Electric Bill',
            cost: 150
        },
        {
            _id: 1,
            title: 'Gas Bill',
            cost: 100
        },
        {
            _id: 2,
            title: 'Water Bill',
            cost: 40
        },
        {
            _id: 3,
            title: 'Internet/Tv',
            cost: 121
        },
    ],
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
        case SET_USER_UTILITIES:
            return {
                ...state,
                utilities: action.payload
            }  
        default: return state;
    }
}