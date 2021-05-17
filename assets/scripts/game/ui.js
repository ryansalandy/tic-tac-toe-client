'use strict'

const newGameSuccess = function (res) {
  $('#new-game').trigger('reset')
  console.log(res)

  $('#messaging').text('New Game!')
}

module.exports = {
  newGameSuccess
}
