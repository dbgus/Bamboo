import { combineReducers } from "redux";
import init from './modules/init'
import auth from './modules/auth'
import feed from './modules/feed'

export default combineReducers({
    init,
    auth,
    feed
})