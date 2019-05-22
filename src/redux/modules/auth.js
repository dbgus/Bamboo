import Axios from 'axios'
import { feedRequest } from './init'

const LOGIN = 'modules/auth/LOGIN'
const LOGIN_SUCCESS = 'modules/auth/LOGIN_SUCCESS'
const LOGIN_FAILED = 'modules/auth/LOGIN_FAILED'

const REGISTER = 'modules/auth/REGISTER'
const REGISTER_SUCCESS = 'moduels/auth/REGISTER_SUCCESS'
const REGISTER_FAILED = 'modules/auth/REGISTER_FAILED'

const LOGOUT = 'modules/auth/LOGOUT'

const CHANGE_VIEW = 'moduels/auth/CHANGE_VIEW'

export const login = () => ({ type: LOGIN })
export const loginSuccess = data => ({ type: LOGIN_SUCCESS, data })
export const loginFailed = () => ({ type: LOGIN_FAILED })

export const register = () => ({ type: REGISTER })
export const registerSucces = () => ({ type: REGISTER_SUCCESS })
export const registerFailed = () => ({ type: REGISTER_FAILED })
export const logout = () => ({})

export const changeView = () => ({ type: CHANGE_VIEW })

const initialState = {
  loading: false,
  login: false,
  view: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loading: true }
    case LOGIN_SUCCESS:
      return { ...state, loading: false, login: action.data }
    case LOGIN_FAILED:
      return { ...state, loading: false, login: false }
    case REGISTER:
      return { ...state, loading: true }
    case REGISTER_SUCCESS:
      return { ...state, loading: false }
    case REGISTER_FAILED:
      return { ...state, loading: false }
    case LOGOUT:
      return { ...state, loading: false, login: false }
    case CHANGE_VIEW:
      return { ...state, view: !state.view }
    default:
      return state
  }
}

export const loginRequest = (userId, userPw) => dispatch => {
  dispatch(login())
  Axios.post(`${process.env.REACT_APP_SERVER}/users/login`, {
    userId,
    userPw
  }).then(res => {
    if (res.data.token) {
      localStorage.setItem('id', res.data.token)
      dispatch(loginSuccess(res.data.token))
      dispatch(feedRequest())
    } else {
      dispatch(loginFailed())
    }
  })
}

export const registerRequest = (userId, userPw, nickName, realName) => dispatch => {
  dispatch(register())
  Axios.post(`${process.env.REACT_APP_SERVER}/users`, {
    userId,
    userPw,
    nickName,
    realName
  }).then(res => {
    if (res.data.success) {
      dispatch(registerSucces())
      dispatch(changeView())
    } else {
      dispatch(registerFailed())
    }
  })
}

export const autoLoginRequest = () => dispatch => {
  dispatch(login())
  const token = localStorage.getItem('id')
  if (token) {
    dispatch(loginSuccess(token))
    dispatch(feedRequest())
  } else {
    dispatch(loginFailed())
  }
}

export const logoutRequest = () => dispatch => {
  localStorage.removeItem('id')
  dispatch(logout())
}
