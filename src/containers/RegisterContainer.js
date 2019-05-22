import React, { Component } from 'react'
import { connect } from 'react-redux'

import Register from '../components/Reigster'
import { registerRequest, changeView } from '../redux/modules/auth'

export class RegisterContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: '',
      pw: '',
      nick: '',
      real: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { id, pw, nick, real } = this.state
    this.props.registerRequest(id, pw, nick, real)
  }

  changeView = () => {
    this.props.changeView()
  }

  render () {
    const { id, pw, nickName, realName } = this.state
    return (
      <Register
        submit={this.handleSubmit}
        change={this.handleChange}
        changeView={this.changeView}
        id={id}
        pw={pw}
        nick={nickName}
        real={realName}
      />
    )
  }
}

const mapStateToProps = state => ({
  login: state.auth.login
})

const mapDispatchToProps = {
  registerRequest: (userId, userpw, nickName, realName) =>
    registerRequest(userId, userpw, nickName, realName),
  changeView: () => changeView()
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer)
