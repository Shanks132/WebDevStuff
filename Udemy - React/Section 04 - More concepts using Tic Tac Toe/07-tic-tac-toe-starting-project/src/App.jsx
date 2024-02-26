import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx'
import { useState } from 'react'
import GameOver from './components/GameOver.jsx'


const WINNING_COMBINATIONS = [
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 }
  ],
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 }
  ],
  [ 
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 }
  ],

  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 }
  ],
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 }
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 }
  ],

  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 }
  ],
  [
    { row: 2, column: 0 },
    { row: 1, column: 1 },
    { row: 0, column: 2 }
  ] 

]

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];



function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = 'O';
  }
  return currentPlayer;
}


function deriveWinner(gameBoard, players){
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    let firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    let secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    let thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    
    
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
      
    }
  }
  return winner;  
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...initialGameBoard.map(array=>[...array])];

  for (const turn of gameTurns) { 
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player; 
  }
  return gameBoard; 
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X:"Player 1",
    O:"Player 2",
  })

  function handlePlayerNameChange(symbol,newName){
    setPlayers(oldPlayer=>{
      return{
        ...oldPlayer,
        [symbol]:newName
      }
    })
  }
  // const [activePlayer, setActivePlayer] = useState('X')
  const activePlayer = deriveActivePlayer(gameTurns);

  
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players)
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRestart(){
      setGameTurns([])
     
  } 
  function handleSelectSquare(rowIndex, colIndex) {

    // setActivePlayer((currActivePlayer)=>currActivePlayer === "X" ? "O":"X");

    setGameTurns((prevTurns) => {
      const activePlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevTurns]
      return updatedTurns
    });
  }
  

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>

          <Player initialName="player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
          
          <Player initialName="player 2" symbol="0" isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner ? winner : undefined} onClickRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
