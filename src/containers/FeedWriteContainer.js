import React, { Component } from 'react'
import { connect } from 'react-redux'
import { writeRequest } from '../redux/modules/feed'
import FeedWrite from '../components/feedWrite'

export class FeedWriteContainer extends Component {
  constructor (props) {
    super(props)
    this.viewToggle = this.viewToggle.bind(this)
    this.state = {
      formToggle: false,
      title: '',
      content: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    const { title, content } = this.state
    this.props.writeRequest(title,content)
    this.setState({
        formToggle: false
    })
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  viewToggle () {
    this.setState({
      formToggle: !this.state.formToggle
    })
  }

  render () {
    const { formToggle, title, content } = this.state

    return (
      <FeedWrite
        toggle={this.viewToggle}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        status={formToggle}
        title={title}
        content={content}
      />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  writeRequest: (title, content) => writeRequest(title, content)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedWriteContainer)
