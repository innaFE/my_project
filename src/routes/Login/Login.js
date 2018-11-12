import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../redux/actions'
import { browserHistory } from 'react-router'

class RegistrationForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      login: '',
      email: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleLoginChange = this.handleLoginChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.onSavePressed = this.onSavePressed.bind(this)
  }

  handleLoginChange (event) {
    this.setState({ login: event.target.value })
  }
  handleEmailChange (event) {
    this.setState({ email: event.target.value })
  }
  handlePasswordChange (event) {
    this.setState({ password: event.target.value })
  }

  componentWillReceiveProps (newProps) {
    console.log('new prosp is', newProps)
  }

  onSavePressed () {
    const { login, email, password } = this.state
    console.log('on save pressed', login, email, password)
    this.props.saveUserProfile({ login, email, password })
    console.log('bro history', browserHistory)

    browserHistory.push('dashboard')
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>login</h4>
        <input type='text' placeholder='login' value={this.state.login} onChange={this.handleLoginChange} />
        <h4>email</h4>
        <input type='text' placeholder='email' value={this.state.email} onChange={this.handleEmailChange} />
        <h4>password</h4>
        <input type='text' placeholder='password' value={this.state.password} onChange={this.handlePasswordChange} />
        <h4 />
        <button type='button' onClick={this.onSavePressed}>
          Save
        </button>
      </form>
    )
  }
}

function mapStateToProps (state) {
  console.log('Registration mapStateToProps', state)

  return {}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm)
