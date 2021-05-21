'use strict'

const config = require('./../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/sign-up'
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/sign-in'
  })
}

// const changePassword = function (data) {
//   return $.ajax({
//     method: 'PATCH',
//     data,
//     url: config.apiUrl + '/change-password',
//     headers: {
//       Authorization: `Bearer ${store.user.token}`
//     }
//   })
// }

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  // changePassword,
  signOut
}
