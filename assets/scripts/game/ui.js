'use strict'

const newGameSuccess = function (res) {
  $('#new-game').trigger('reset')
  console.log(res)

  $('#messaging').text('New Game!')
}

// const gamePlaySuccess = function (res) {
//   $('.board-cell').trigger('reset')
// }

module.exports = {
  newGameSuccess
  // gamePlaySuccess
}
