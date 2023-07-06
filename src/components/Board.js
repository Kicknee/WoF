import { Tile } from "./Tile";
import { useGlobalContext } from "../context";

function Board(props) {
  const { chosenLetters, currPlayer } = useGlobalContext();

  const tiles = [...props.phrase];
  console.log(tiles);

  for (let i = 0; i < 56; i++) {
    if (tiles[i] === null) {
      tiles[i] = <div key={i}></div>;
    } else if (tiles[i] === 0 || tiles[i] === 1) {
      tiles[i] = <Tile key={i} value={null} />;
    } else if (
      chosenLetters.current &&
      chosenLetters.current.indexOf(tiles[i]) !== -1
    ) {
      tiles[i] = <Tile key={i} value={tiles[i]} show={true} />;
    } else {
      tiles[i] = <Tile key={i} value={tiles[i]} show={false} />;
    }
  }

  return (
    <div
      className={`board ${
        currPlayer === 0
          ? "player1"
          : currPlayer === 1
          ? "player2"
          : currPlayer === 2
          ? "player3"
          : ""
      }`}
    >
      {tiles}
    </div>
  );
}

export { Board };
