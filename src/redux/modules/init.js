import Axios from 'axios'

const FEED = 'modules/init/FEED'
const FEED_SUCCESS = 'modules/init/FEED_SUCCESS'

export const feed = () => ({ type: FEED })
export const feedSuccess = data => ({ type: FEED_SUCCESS, data })

const initialState = {
  feedLoading: false,
  feed: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FEED:
      return { ...state, feedLoading: true }
    case FEED_SUCCESS:
      return { ...state, feedLoading: false, feed: action.data }
    default:
      return state
  }
}

export const feedRequest = () => dispatch => {
  dispatch(feed())
  Axios.get(`${process.env.REACT_APP_SERVER}/feeds/howlist/10`).then(res => {
    dispatch(feedSuccess(res.data.result))
  })
}
