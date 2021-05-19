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

const gamePlay = function (cellIndex) {
  const gameId = store.game._id
  return $.ajax({
    url: config.apiUrl + '/games/' + gameId,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: 'x'
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
