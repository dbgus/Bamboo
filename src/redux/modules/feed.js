import Axios from 'axios'

const FEED_WRITE = 'modules/feed/FEED_WRITE'
const FEED_WRITE_SUCCESS = 'modules/feed/FEED_WRITE_SUCCESS'
const FEED_WRITE_FAILED = 'modules/feed/FEED_WRITE_FAILED'

const COMMENT = 'modules/feed/COMMENT'
const COMMENT_SUCCESS = 'modules/feed/COMMENT_SUCCESS'

export const feedWrite = () => ({ type: FEED_WRITE })
export const feedWriteSuccess = () => ({ type: FEED_WRITE_SUCCESS })
export const feedWriteFailed = err => ({ type: FEED_WRITE_FAILED, err })

export const comment = () => ({ type: COMMENT })
export const commentSuccess = comment => ({ type: COMMENT_SUCCESS, comment })

const initialState = {
  loading: false,
  error: false,
  comment: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    //* content
    case FEED_WRITE:
      return { ...state, loading: true, error: false }
    case FEED_WRITE_SUCCESS:
      return { ...state, loading: false, error: false }
    case FEED_WRITE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.err
      }
    //* comment
    case COMMENT:
      return { ...state }
    case COMMENT_SUCCESS:
      return { ...state, comment: action.comment }
    default:
      return state
  }
}

export const writeRequest = (feedTitle, feedContents) => dispatch => {
  dispatch(feedWrite())
  const token = localStorage.getItem('id')
  if (feedTitle && feedContents && token) {
    Axios.post(`${process.env.REACT_APP_SERVER}/feeds`, {
      token,
      feedTitle,
      feedContents
    }).then(res => {
      if (res.data.success) {
        dispatch(feedWriteSuccess())
      } else {
        dispatch(feedWriteFailed())
      }
    })
  } else {
    dispatch(feedWriteFailed())
  }
}

export const commentReqeuest = id => dispatch => {
  Axios.get(`${process.env.REACT_APP_SERVER}/feeds/${id}`).then(res => {
    dispatch(commentSuccess(res.data.comment))
  })
}

export const commentWriteReqeuest = (commentContent, id) => dispatch => {
  const token = localStorage.getItem('id')
  console.log(token, id, commentContent)
  if (commentContent && token) {
    Axios.post(`${process.env.REACT_APP_SERVER}/comments/${id}`, {
      token,
      commentContent
    }).then(res => {
      dispatch(commentReqeuest(id))
    })
  }
}
