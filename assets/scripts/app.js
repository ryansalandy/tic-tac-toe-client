'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const getFormFields = require('./../../lib/get-form-fields')
const config = require('./config')
const store = require('./store')

// res stands for response
const signUpSuccess = function (res) {
  // Reset the form
  // $('#sign-up').reset()
  $('#sign-up').trigger('reset')
  console.log(res)
  // Messaging
  $('#messaging').text('Welcome, ' + res.user.email)
}

// err stands for error
const signUpFailure = function (err) {
  console.log(err)
  $('#messaging').text('Failed with status: ' + err.status)
}

const onSubmitForms = function (event) {
  console.log('in onSubmitForms')
  event.preventDefault()
  const data = getFormFields(event.target)
  signUp(data)

    .then(signUpSuccess)
    // Failed :(
    .catch(signUpFailure)
}

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/sign-up'
  })
}

$(() => {
  // Event handlers here
  $('#sign-up').on('submit', onSubmitForms)
  console.log()
})
