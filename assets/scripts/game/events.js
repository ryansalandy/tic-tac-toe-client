'use strict'

// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

store.playerOne = 'X'

// New game button event handler function
const onNewGame = function (event) {
  event.preventDefault()
  $('.container').trigger('reset')

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// Game play event handler function
const onGamePlay = function (event) {
  event.preventDefault()

  const box = $(event.target)
  const index = box.data('cell-index')
  const textValue = event.target.innerText
  if (textValue) return
  box.text(store.currentPlayer)
  // const box = $(event.target).data('cell-index')
  // const textValue = event.target.innerText
  // if (textValue) return
  // boxt.text(store.currentPlayer)

  api.gamePlay(index)
    .then(ui.gamePlaySuccess)
    .catch(ui.gamePlayFailure)
}

module.exports = {
  onNewGame,
  onGamePlay
}
