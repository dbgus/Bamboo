import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'

export class HeaderContainer extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  changePage = e => {
    const { history } = this.props
    history.push(`/${e.target.id}`)
  }
  render () {
    return (
      <Header
        toggle={this.toggle}
        status={this.state.isOpen}
        pageChange={this.changePage}
      />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer)
