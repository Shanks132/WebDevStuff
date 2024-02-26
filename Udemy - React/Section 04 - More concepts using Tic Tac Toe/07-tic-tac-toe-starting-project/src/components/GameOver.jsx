export default function GameOver({ winner, onClickRestart }) {

  return (
    <div id="game-over">
      <p>Game Over !</p>
      {{winner} && <p>{winner} won!</p>}
      {!winner && <p>It's a draw</p>}
      <p><button onClick={onClickRestart}>Rematch !</button></p>
    </div>
  );
}