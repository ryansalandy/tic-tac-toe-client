'use strict'

// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

store.playerOne = 'X'

const onNewGame = function (event) {
  event.preventDefault()
  $('.game-board').trigger('reset')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGamePlay = function (event) {
  event.preventDefault()

  const callIndex = $(event.target).data('cell-index')
  // const endGame = store.endGame
  const textValue = event.target.innerText
  if (textValue) return

  api.gamePlay(callIndex)
    .then(ui.gamePlaySuccess)
    .catch(ui.gamePlayFailure)
}

module.exports = {
  onNewGame,
  onGamePlay
}
