import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../constants/authConstants';
import axios from 'axios';

// signup action
export const signupAction = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    // send to server
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}signup`,
      user,
      config
    );

    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload:
        err.response && err.response.data.errors
          ? err.response.data.errors
          : err.message,
    });
  }
};

// login action
export const loginAction = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}login`,
      user,
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data.user));
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.errors
          ? err.response.data.errors
          : err.message,
    });
  }
};
