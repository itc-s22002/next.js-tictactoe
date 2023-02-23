import React from 'react'

const Square = props => {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

const Board = props => {
  const [state, setState] = React.useState({ squares: Array(9).fill(null) })

  const handleClick = (i) => {
    const squares = state.squares.slice()
    squares[i] = 'X'
    setState({ squares })
  }

  const renderSquare = (i) => {
    return (
      <Square
        value={state.squares[i]}
        onClick={() => handleClick(i)}
      />
    )
  }
  const status = 'Next player: X'

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

const Game = prpos => {
  return (
    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
      <div className='game-info'>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}

export default Game
