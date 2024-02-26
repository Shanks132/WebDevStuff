
export default function GameBoard({onSelectSquare,board}) {
    
    // const [gameBoard, setGameBoard] = useState(initalGameBoard)

    // function selectHandleSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });
    //     onSelectSquare();
    // }
    return (
        <ol id="game-board">

            {board.map((row, rowIndex) => (

                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                {/* <button onClick={() => selectHandleSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                             */}
                                <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol != null ? true : false}>{playerSymbol}</button>
                            </li>
                        ))}

                    </ol> 
                </li>
            ))}
        </ol>
    );
}