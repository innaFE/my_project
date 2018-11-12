import React, { Component } from 'react'
import { bindAll } from 'lodash'

class RegistrationForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      errorName: '',
      erroremail: '',
      errorPassword: ''
    }

    bindAll(this, [
      'changeName',
      'changeEmail',
      'changePassword',
      'submit',
      '_isFormValid',
      '_isEmailValid',
      '_isPasswordValid',
      '_isPasswordValid '
    ])
  }

  changName () {
    this.setState({ name })
  }

  changeEmail () {
    this.setState({ email })
  }

  changePassword () {
    this.setState({ password })
  }

  submit (event) {
    event.preventDefault()
    if (!this._isFormValid()) return
  }
  _isFormValid () {
    return (
      this._isNameValid(this.state.name) &&
      this._isEmailValid(this.state.email) &&
      this._isPasswordValid(this.state.password)
    )
  }
  _isNameValid (name) {
    let isValid = true
    let errorName = ''

    if (name === '') {
      errorName = 'the field cannot be empty'
      isValid = false
    }
    if (name.lenght < 3) {
      errorName = ' field length can not be less than 3 symbols'
      isValid = false
    }
    this.getState(errorName)
    return isValid
  }

  _isEmailValid (email) {
    let isValid = true
    let errorEmail = ''

    if (email === '') {
      errorEmail = 'the field cannot be empty'
      isValid = false
    }
    if (email.lenght < 3) {
      errorEmail = ' field length can not be less than 3 symbols'
      isValid = false
    }
    this.getState(errorEmail)
    return isValid
  }

  _isPasswordValid (password) {
    let isValid = true
    let errorPassword = ''

    if (email === '') {
      errorPassword = 'the field cannot be empty'
      isValid = false
    }
    if (name.lenght < 3) {
      errorPassword = ' field length can not be less than 3 symbols'
      isValid = false
    }
    this.getState(errorPassword)
    return isValid
  }

  render () {
    return (
      <form>
        <h4>name</h4>
        <input onChange={this.changName} value={this.state.name} errors={this.state.errorName} />
        <h4>email</h4>
        <input onChange={this.changeEmail} value={this.state.email} errors={this.state.errorEmail} />
        <h4>password</h4>
        <input onChange={this.changePassword} value={this.state.password} errors={this.state.errorPassword} />
        <button type='submit' onClick={this.submit}>
          {' '}
          Save{' '}
        </button>
      </form>
    )
  }
}

export default RegistrationForm
