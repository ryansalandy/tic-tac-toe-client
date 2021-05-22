'use strict'

const store = require('./../store')

const newGameSuccess = function (response) {
  $('#new-game').trigger('reset')
  store.currentPlayer = 'X'
  store.gameOver = false
  store.game = response.game

  $('#messaging').text('Its Your Turn X!')

  $('#after-new-game').show()
}

const newGameFailure = function () {
  $('#messaging').text('New game failed')
}

const gamePlaySuccess = function (res) {
  // $('.box').trigger('reset')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  gamePlaySuccess
}
