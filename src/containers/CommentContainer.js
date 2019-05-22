import React, { Component } from 'react'
import { connect } from 'react-redux'

import Comment from '../components/Comment'
import { commentReqeuest, commentWriteReqeuest } from '../redux/modules/feed'

class CommentContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      commentContent: ''
    }
  }

  handleClick = () => {
    const { commentReqeuest } = this.props
    commentReqeuest(this.props.id)
  }
  handleSubmit = () => {
    console.log(1)
    this.props.commentWriteReqeuest(this.state.commentContent, this.props.id)
    this.setState({
      commentContent: ''
    })
  }
  handleChange = e => {
    this.setState({
      commentContent: e.target.value
    })
  }
  render () {
    const { comment } = this.props
    return (
      <Comment
        click={this.handleClick}
        change={this.handleChange}
        submit={this.handleSubmit}
        comment={comment}
        value={this.state.commentContent}
      />
    )
  }
}
const mapStateToProps = state => ({
  comment: state.feed.comment
})

const mapDispatchToProps = {
  commentReqeuest: id => commentReqeuest(id),
  commentWriteReqeuest: (content, id) => commentWriteReqeuest(content, id)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentContainer)
