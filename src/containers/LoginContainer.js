import React, { Component } from 'react'
import { connect } from 'react-redux'

import Login from '../components/Login'
import { loginRequest, changeView } from '../redux/modules/auth'

export class LoginContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: '',
      pw: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { id, pw } = this.state
    this.props.loginRequest(id, pw)
  }
  changeView = () => {
    this.props.changeView()
  }

  render () {
    const { id, pw } = this.state
    return (
      <div>
        <Login
          submit={this.handleSubmit}
          change={this.handleChange}
          id={id}
          pw={pw}
          changeView={this.changeView}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  login: state.auth.login
})

const mapDispatchToProps = {
  loginRequest: (userId, userpw) => loginRequest(userId, userpw),
  changeView: () => changeView()
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
