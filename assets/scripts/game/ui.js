'use strict'

const newGameSuccess = function (res) {
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
