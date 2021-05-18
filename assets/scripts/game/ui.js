'use strict'

const store = require('./../store')

const newGameSuccess = function (res) {
  store.game = res.game
  $('#new-game').trigger('reset')
  console.log(res)

  $('#messaging').text('New Game!')
}

const gamePlaySuccess = function (res) {
  $('.box').trigger('reset')
}

module.exports = {
  newGameSuccess,
  gamePlaySuccess
}
