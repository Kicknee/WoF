import "./App.css";
import React, { useEffect } from "react";
import { Board } from "./components/Board";
import { GameStats } from "./components/GameStats";
import { InitialComponent } from "./components/InitialComponent";
import { PlayersInterface } from "./components/PlayersInterface";
import { Wheel } from "./components/Wheel";
import { Modal } from "./components/Modal";
import { useGlobalContext } from "./context";

function App() {
  const { initiation, phrases, currPhrase, showModal } = useGlobalContext();
  const screenResize = React.useRef({ height: null, width: null });

  const structure = distributeLetters();

  useEffect(() => {
    screenResize.current.height = window.innerHeight;
    screenResize.current.width = window.innerWidth;

    window.addEventListener("resize", () => {
      screenResize.current.height = window.innerHeight;
      screenResize.current.width = window.innerWidth;
      console.log(screenResize.current);
      if (
        screenResize.current.width < 1000 &&
        screenResize.current.height < 1000
      ) {
        console.log("screen size not supported");
        alert("screen size not supported");
      }
    });
  });
  return (
    <div className="App">
      {!initiation ? (
        <InitialComponent />
      ) : (
        <>
          <GameStats />
          <PlayersInterface />
          <Board phrase={structure} />
          <Wheel />
        </>
      )}
      {showModal && <Modal></Modal>}
    </div>
  );

  function distributeLetters() {
    const tiles = new Array(56).fill(0);
    tiles[0] = null;
    tiles[13] = null;
    tiles[42] = null;
    tiles[55] = null;
    let indx = 1;
    let phrase = currPhrase;

    while (
      phrase.length > 40 ||
      phrase.split(" ").some((word) => word.length > 14)
    ) {
      console.log("Too long phrase... choosing another one");
      indx = (indx + 1) % phrases.length;
      phrase = phrases[indx].phrase;
    }

    let words = phrase.split(" ");

    let row = {
      currentRow: 1,
      leftTiles: 12,
    };

    while (words.length > 0) {
      if (words[0].length > row.leftTiles) {
        row.currentRow++;
        if (row.currentRow === 1 || row.currentRow === 4) {
          row.leftTiles = 12;
        } else {
          row.leftTiles = 14;
        }
      }
      switch (true) {
        case row.currentRow === 1:
        case row.currentRow === 2:
        case row.currentRow === 3:
        case row.currentRow === 4:
          row.leftTiles -= words[0].length;
          if (row.leftTiles > 0) row.leftTiles--;

          spreadOnBoard(words[0]);
          words.shift();

          break;

        default:
          console.log("error");
          break;
      }
    }

    function spreadOnBoard(word) {
      const letters = word.split("");

      switch (row.currentRow) {
        case 1:
          // let i = 0;
          for (let i = 0; i <= 13; i++) {
            if (tiles[i] === 0 && letters[0]) {
              tiles[i] = letters.shift();
            }
            if (tiles[i - 1] !== 0 && tiles[i - 1] !== 1 && tiles[i] === 0)
              tiles[i] = 1;
          }
          break;

        case 2:
          for (let i = 14; i <= 27; i++) {
            if (tiles[i] === 0 && letters[0]) {
              tiles[i] = letters.shift();
            }
            if (tiles[i - 1] !== 0 && tiles[i - 1] !== 1 && tiles[i] === 0)
              tiles[i] = 1;
          }

          break;

        case 3:
          for (let i = 28; i <= 41; i++) {
            if (tiles[i] === 0 && letters[0]) {
              tiles[i] = letters.shift();
            }
            if (tiles[i - 1] !== 0 && tiles[i - 1] !== 1 && tiles[i] === 0)
              tiles[i] = 1;
          }
          break;

        case 4:
          for (let i = 43; i <= 54; i++) {
            if (tiles[i] === 0 && letters[0]) {
              tiles[i] = letters.shift();
            }
            if (tiles[i - 1] !== 0 && tiles[i - 1] !== 1 && tiles[i] === 0)
              tiles[i] = 1;
          }
          break;
      }
    }
    return tiles;
  }
}

export default App;
