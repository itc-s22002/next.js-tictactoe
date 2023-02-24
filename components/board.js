import React from 'react'
import Square from 'components/squares'
import calculateWinner from 'components/calculatewinner'

const Board = props => {
  const [state, setState] = React.useState({ squares: Array(9).fill(null), xIsNext: true })

  const handleClick = (i) => {
    const squares = state.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = state.xIsNext ? 'X' : 'O'
    setState({ squares, xIsNext: !state.xIsNext })
  }

  const renderSquare = (i) => {
    return (
      <Square
        value={state.squares[i]}
        onClick={() => handleClick(i)}
      />
    )
  }
  const winner = calculateWinner(state.squares)
  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = 'Next player: ' + (state.xIsNext ? 'X' : 'O')
  }
  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board
