'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onNewGame = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGamePlay = function (event) {
  event.preventDefault()

  const callIndex = $(event.target).data('cell-index')

  api.gamePlay(callIndex)
    .then(ui.gamePlaySuccess)
    .catch(ui.gamePlayFailure)
}

module.exports = {
  onNewGame,
  onGamePlay
}
