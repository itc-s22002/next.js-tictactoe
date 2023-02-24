import React from 'react'
import Board from 'components/board'
import styles from 'styles/game.module.css'

const Game = prpos => {
  return (
    <div className={styles.game}>
      <div className='game-board'>
        <Board />
      </div>
      <div className={styles.gameinfo}>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}
export default Game
