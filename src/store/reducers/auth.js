import * as actionTypes from '../actions/actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
    isAuthenticated: false,
    error: null,
    user: {},
})

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return state.merge({
                isAuthenticated: true,
                error: null,
                user: action.payload,
            })

        case actionTypes.LOGIN_FAIL:
            return state.merge({
                isAuthenticated: false,
                error: action.payload,
            })

        case actionTypes.LOGOUT:
            return state.merge({
                isAuthenticated: false,
                error: null,
                user: {},
            })

        default:
            return state
    }
}

export default reducer;