import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../redux/actions'

class Dashboard extends Component {
  render () {
    const { user } = this.props
    return (
      <form>
        <label>{user.email}</label>
        <label>{user.login}</label>
        <label>{user.password}</label>
      </form>
    )
  }
}

function mapStateToProps (state) {
  console.log('Dashboard mapStateToProps', state)

  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
