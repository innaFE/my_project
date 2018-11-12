import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    this.handlPasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('form is submited. Email value is', this.state.email)
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
        <button> Save</button>
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps)(RegistrationForm)
