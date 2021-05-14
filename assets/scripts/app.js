'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const onSubmitForms = function () {
  console.log('in onSubmitForms')
  submitForms()
}

const submitForms = function () {
  $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up'
  })
}

$(() => {
  // Event handlers here
  $('#button').on('click', onSubmitForms)
  console.log()
})
