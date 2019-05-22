import React, { Component } from 'react'
import { connect } from 'react-redux'

import Login from './LoginContainer'
import Register from './RegisterContainer'

export class AuthContainer extends Component {
  render () {
    if (this.props.view) {
      return <Register />
    } else {
      return <Login />
    }
  }
}
const mapStateToProps = state => ({
  view: state.auth.view
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer)
