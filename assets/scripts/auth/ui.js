'use strict'

const store = require('./../store')

// Start of Sign up Success and Failure
const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')
  console.log(res)

  $('#messaging').text('Welcome, ' + res.user.email)
}

const signUpFailure = function (err) {
  console.log(err)

  $('#messaging').text('Failed with status: ' + err.status)
}
// End of Sign up Success and Failure

// Start of Sign in Success and Failure
const signInSuccess = function (response) {
  $('#sign-in').trigger('reset')
  console.log(response)
  store.user = response.user

  $('#messaging').text('Signed in Successfully')

  // $('#after-sign-in').show()
  //
  // $('#before-sign-in').hide()
}

const signInFailure = function (err) {
  $('#messaging').text('Failed with error ', err)
}
// End of Sign in Success and Failure

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
