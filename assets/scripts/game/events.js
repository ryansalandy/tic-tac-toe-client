'use strict'

// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onNewGame = function (event) {
  event.preventDefault()

  // const data = getFormFields(event.target)

  api.newGame() // removed data in par.
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGamePlay = function (event) {
  event.preventDefault()

  const endGame = store.endGame

  const callIndex = $(event.target).data('cell-index')

  api.gamePlay(callIndex, endGame)
    .then(ui.gamePlaySuccess)
    .catch(ui.gamePlayFailure)
}

module.exports = {
  onNewGame,
  onGamePlay
}
