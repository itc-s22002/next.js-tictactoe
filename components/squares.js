import styles from 'styles/squares.module.css'
const Square = props => {
  return (
    <button className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square
