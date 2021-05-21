'use strict'

const store = require('./../store')

// Sign up begin
const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  console.log(res)

  $('#messaging').text('Welcome, ' + res.user.email)
}

const signUpFailure = function (err) {
  console.log(err)

  $('#messaging').text('Failed with status: ' + err.status)
}
// Sign up end

// Sign in begin
const signInSuccess = function (response) {
  $('#sign-in').trigger('reset')
  console.log(response)
  store.user = response.user

  $('#messaging').text('Signed in Successfully')

  $('#after-sign-in').show()

  $('#before-sign-in').hide()
}

const signInFailure = function (err) {
  $('#messaging').text('Sign in failed ', err)
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
  $('#messaging').text('Sign up failed :(')
}
// Sign out end

// const newGameSuccess = function () {
//   // $('#new-game').trigger('reset')
//   $('#messaging').text('Lets Play!')
// }
//
// const newGameFailure = function () {
//   $('#messaging').text('New game failed :/')
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  // changePasswordSuccess,
  // changePasswordFailure,
  signOutSuccess,
  signOutFailure
  // newGameSuccess,
  // newGameFailure
}
