import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './HeaderContainer'
import Auth from './AuthContainer'
import Write from './FeedWriteContainer'
import Home from '../components/Home'
import { feedRequest } from '../redux/modules/init'
import { autoLoginRequest } from '../redux/modules/auth'

class HomeContainer extends Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      popover: false
    }
  }

  componentWillMount () {
    const { autoLoginRequest } = this.props
    autoLoginRequest()
  }

  toggle () {
    this.setState({
      popover: !this.state.popover
    })
  }
  

  render () {
    const { feed, history, login } = this.props
    const { popover, formToggle } = this.state
    if (login) {
      return (
        <div>
          <Header history={history} />
          <Home feed={feed} toggle={this.toggle} status={popover} />
          <Write toggle={this.viewToggle} status={formToggle} />
        </div>
      )
    } else {
      return <Auth />
    }
  }
}

const mapStateToProps = state => ({
  feed: state.init.feed,
  login: state.auth.login
})

const mapDispatchToProps = {
  feedRequest: () => feedRequest(),
  autoLoginRequest: () => autoLoginRequest()
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
