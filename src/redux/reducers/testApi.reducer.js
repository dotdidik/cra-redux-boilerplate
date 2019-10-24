import * as types from '../types/testApi.types';

const initialState = {
    data: null,
    loading: false,
    status: false
}

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
        case types.testApi.GET_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.testApi.GET_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        default: 
        return initialState;
    }
}
