import * as actionTypes from './actionTypes';
import axios from 'axios';

export const login = (account, password) => {
    return dispatch => {
        setTimeout(() => {
            // axios.get('./mock_data/auth.json', {
            axios.get('http://localhost:3000/mock_data/auth.json', {
                params: {
                    account: account,
                    password: password
                }
            }).then(res => {
                const { _id, token, account, name, expiresIn } = res.data; // check the data in /public/mock_data/auth.json
                const expirationDate = new Date(new Date().getTime() + expiresIn * 1000); //initialize a 3600-second session

                // save user_info and expire_time in session
                sessionStorage.setItem("token", token); // token should be able to get user info and exp
                sessionStorage.setItem("_id", _id);
                sessionStorage.setItem("account", account);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("expirationDate", expirationDate);

                dispatch(checkAuthTimeOut(expiresIn));
                dispatch(loginSuccess({
                    _id: _id,
                    account: account,
                    name: name,
                }));
            }).catch(err => {
                dispatch(loginFail("Login Fail"));
            })
        }, 1000)
    }
}

const loginSuccess = (auth_data) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: auth_data
    }
}

const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        payload: error
    }
}

// if session expires, automatically log out
const checkAuthTimeOut = (expiresIn) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expiresIn * 1000);
    }
}

// log out
export const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem("_id");
    sessionStorage.removeItem("account");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem('expirationDate');
    return {
        type: actionTypes.LOGOUT
    };
};

// check authentication state, if user has logged in and still before expire time, user still have access
export const checkAuthState = () => {
    return dispatch => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(sessionStorage.getItem('expirationDate'));
            if (expirationDate < new Date()) {
                dispatch(logout());
            } else {
                dispatch(loginSuccess({
                    _id: sessionStorage.getItem("_id"),
                    account: sessionStorage.getItem("account"),
                    name: sessionStorage.getItem("name")
                }));
                dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}