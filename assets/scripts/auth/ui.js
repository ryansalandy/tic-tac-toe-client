'use strict'

const store = require('./../store')

// Sign up begin
const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')

  $('#messaging').text('Please sign in with, ' + res.user.email)
}

const signUpFailure = function (err) {
  $('#messaging').text('Failed, passwords not a match: ' + err.status)
}
// Sign up end

// Sign in begin
const signInSuccess = function (response) {
  $('#sign-in').trigger('reset')
  store.user = response.user

  $('#messaging').text('Signed in Successfully')

  $('#after-sign-in').show()

  $('#before-sign-in').hide()
}

const signInFailure = function (err) {
  $('#messaging').text('Sign in failed, check email and password ', err)
}
// Sign in end

// const changePasswordSuccess = function () {
//   $('#change-password').trigger('reset')
//   $('#messaging').text('Changed password successfully!')
// }
//
// const changePasswordFailure = function () {
//   $('#messaging').text('Change password failed :/')
// }

// Sign out begin
const signOutSuccess = function () {
  store.user = null
  $('#messaging').text('Signed out successfully. Goodbye!')

  $('#before-sign-in').show()

  $('#after-sign-in').hide()
}

const signOutFailure = function () {
  $('#messaging').text('Sign out failed :(')
}
// Sign out end

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  // changePasswordSuccess,
  // changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
