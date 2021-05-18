'use strict'

const config = require('./../config')
const store = require('./../store')

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const gamePlay = function (data) {
  const gameId = store.game._id
  return $.ajax({
    url: config.apiUrl + '/games/' + gameId,
    method: 'PATCH',
    data,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  newGame,
  gamePlay
}
