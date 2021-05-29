'use strict'

const store = require('./../store')

const newGameSuccess = function (res) {
  store.currentPlayer = 'X'
  store.gameOver = false
  store.game = res.game

  $('#messaging').text('Your Turn Player X!')
  $('#after-new-game').show()
  $('.container').show()
  $('.box').text('')
  $('.box').val('')
}

const newGameFailure = function () {
  $('#messaging').text('New game failed')
}

const gamePlaySuccess = function (res) {
  store.game = res.game
  store.currentPlayer = store.currentPlayer === 'O' ? 'X' : 'O'
  if (store.currentPlayer === 'X') {
    $('#messaging').text('Your Turn Player X!')
  } else if (store.currentPlayer === 'O') {
    $('#messaging').text('Your Turn Player O!')
  }

  // Start Horizontal Wins for X or O
  if (store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') {
    $('#game-message').text('X WINS!!!')
    $('.container').hide()
  } else if (store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') {
    $('#messaging').text('O WINS!!!')
    $('.container').hide()
  } else if (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') {
    $('#messaging').text('X WINS!!!')
    $('.container').hide()
  } else if (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') {
    $('#messaging').text('O WINS!!!')
    $('.container').hide()
  } else if (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') {
    $('#messaging').text('X WINS!!!')
    $('.container').hide()
  } else if (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') {
    $('#messaging').text('O WINS!!!')
    $('.container').hide()

    // Start of Vertical Wins X or O
  } else if (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') {
    $('#messaging').text('X WINS!!!')
    $('.container').hide()
  } else if (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') {
    $('#messaging').text('O WINS!!!')
    $('.container').hide()
  } else if (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') {
    $('#messaging').text('X WINS!!!')
    $('.container').hide()
  } else if (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') {
    $('#messaging').text('O WINS!!!')
    $('.container').hide()
  } else if (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') {
    $('#messaging').text('X WINS!!!')
    $('.container').hide()
  } else if (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') {
    $('#messaging').text('O WINs!!!')
    $('.container').hide()

    // Start of Diagonal Wins X or O
  } else if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
    $('#messaging').text('X WINS!!!')
    $('.container').hide()
  } else if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
    $('#messaging').text('O WINS!!!')
    $('.container').hide()
  } else if (store.game.cells[6] === 'X' && store.game.cells[4] === 'X' && store.game.cells[2] === 'X') {
    $('#messaging').text('X WINS!!!')
    $('.container').hide()
  } else if (store.game.cells[6] === 'O' && store.game.cells[4] === 'O' && store.game.cells[2] === 'O') {
    $('#messaging').text('O WINS!!!')
    $('.container').hide()

    // Start of Tie Game Results
  } else if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '' &&
  store.game.cells[3] !== '' && store.game.cells[4] !== '' && store.game.cells[5] !== '' &&
  store.game.cells[6] !== '' && store.game.cells[7] !== '' && store.game.cells[8] !== '') {
    $('#messaging').text('IT\'S A DRAW!!!')
    $('.container').hide()
  }
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  gamePlaySuccess
}
