import { useState } from "react"
import { Children } from "react"

const TURNS = {
  x: 'x',
  o: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [5, 6, 7],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.x)
  const [winner, serWinner] = useState(null)
  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] === turn &&
        boardToCheck[b] === turn &&
        boardToCheck[c] === turn
      ) {
        serWinner(turn)
      }
    }
  }
  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    const newBoard = [...board]
    newBoard[index] = turn
    checkWinner(newBoard)
    setBoard(newBoard)
    setTurn(newTurn)
  }

  return (
    <main className="board">
      <h1>tic tac toe</h1>
      <section className="game">
        {
          board.map((turn, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
        Winner is : {winner}
      </section>
    </main>
  )
}

export default App