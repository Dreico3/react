import { useState } from "react"
import confetti from "canvas-confetti"
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
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    console.log(window.localStorage.getItem('turn'),'sss')
    const turnFromStorage = window.localStorage.getItem('turn')
    if (turnFromStorage) return turnFromStorage
    return TURNS.x
  })
  const [winner, serWinner] = useState(null)
  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] === turn &&
        boardToCheck[b] === turn &&
        boardToCheck[c] === turn
      ) {
        confetti()
        serWinner(turn)
      }
      if (boardToCheck.every((square) => square !== null)) {
        serWinner(false)
      }
    }
  }
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    serWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }
  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    const newBoard = [...board]
    newBoard[index] = turn
    checkWinner(newBoard)
    setBoard(newBoard)
    setTurn(newTurn)
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
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
      </section>
      <section>
        {
          winner !== null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {winner === false
                    ? 'Empate'
                    : 'winner is ' + winner
                  }
                </h2>
                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>Empezar de nuevo?</button>
                </footer>
              </div>
            </section>
          )
        }
      </section>
    </main>
  )
}

export default App