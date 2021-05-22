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

const gamePlay = function (index) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: `${index}`,
          value: `${store.currentPlayer}`
        },
        over: false
      }
    },
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  newGame,
  gamePlay
}
