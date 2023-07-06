import React, {
  useContext,
  useState,
  createContext,
  useEffect,
  useRef,
} from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [initiation, setInitiation] = useState(false);
  const [player1, setPlayer1] = useState({ name: null, score: null });
  const [player2, setPlayer2] = useState({ name: null, score: null });
  const [player3, setPlayer3] = useState({ name: null, score: null });
  const [currPlayer, setCurrPlayer] = useState(0);
  const [currReward, setCurrReward] = useState(null);
  const [choice, setChoice] = useState("");
  const [playersLetter, setPlayersLetter] = useState("");
  const [playersPhrase, setPlayersPhrase] = useState("");
  let chosenLetters = React.useRef([]);
  const [activeWheel, setActiveWheel] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modal_message = useRef();
  const winnerPlayer = useRef(null);

  const phrases = [
    {
      phrase: "naleśniki",
      category: "jedzenie",
    },
    {
      phrase: "książka",
      category: "rzecz",
    },
    {
      phrase: "głodny jak wilk",
      category: "powiedzenie",
    },
  ].map((el) => {
    return {
      ...el,
      phrase: el.phrase.toUpperCase(),
    };
  });
  const [currPhrase, setCurrPhrase] = useState(
    phrases[Math.floor(Math.random() * phrases.length)].phrase
  );

  useEffect(() => {
    setCurrPlayer(0);
    setActiveWheel(true);
  }, [initiation]);

  useEffect(() => {
    if (validatePlayersLetter()) {
      const howManyTimes = currPhrase
        .split("")
        .filter((el) => el === playersLetter).length;
      for (let i = 0; i < howManyTimes; i++) {
        chosenLetters.current = [...chosenLetters.current, playersLetter];
      }
      if (currPlayer === 0) {
        setPlayer1((prev) => ({
          ...prev,
          score: prev.score + currReward * howManyTimes,
        }));
      }
      if (currPlayer === 1) {
        setPlayer2((prev) => ({
          ...prev,
          score: prev.score + currReward * howManyTimes,
        }));
      }
      if (currPlayer === 2) {
        setPlayer3((prev) => ({
          ...prev,
          score: prev.score + currReward * howManyTimes,
        }));
      }
      setActiveWheel(true);
    } else {
      setCurrReward(null);
      setActiveWheel(true);
      setCurrPlayer((prev) => (prev + 1) % 3);
    }
    if (phraseCompleteness()) {
      let bestScore = 0;
      const players = [player1, player2, player3];

      for (let player of players) {
        if (player.score > bestScore) {
          bestScore = player.score;
          winnerPlayer.current = player;
        }
      }
      if (winnerPlayer.current === null) {
        winnerPlayer.current = "draw";
      }
      displayModal(
        `game over: ${
          winnerPlayer.current !== "draw"
            ? winnerPlayer.current.name + " wins"
            : "draw"
        }`
      );
    }
    setCurrReward(null);
    setChoice("");
  }, [playersLetter]);

  useEffect(() => {
    if (currReward === "stop") {
      setCurrReward(null);
      setActiveWheel(true);
      setCurrPlayer((prev) => (prev + 1) % 3);
    } else if (currReward === "bankrut") {
      if (currPlayer === 0) {
        setPlayer1((prev) => ({ ...prev, score: 0 }));
      }
      if (currPlayer === 1) {
        setPlayer2((prev) => ({ ...prev, score: 0 }));
      }
      if (currPlayer === 2) {
        setPlayer3((prev) => ({ ...prev, score: 0 }));
      }
      setCurrReward(null);
      setActiveWheel(true);
      setCurrPlayer((prev) => (prev + 1) % 3);
    }
  }, [currReward]);

  useEffect(() => {
    if (validatePlayersPhrase()) {
      const phraseLetters = playersPhrase
        .split("")
        .filter((char) => /[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]/.test(char));

      chosenLetters.current = [...phraseLetters];

      let bestScore = 0;
      const players = [player1, player2, player3];

      for (let player of players) {
        if (player.score > bestScore) {
          bestScore = player.score;
          winnerPlayer.current = player;
        }
      }
      if (winnerPlayer.current === null) {
        winnerPlayer.current = "draw";
      }

      displayModal(
        `game over: ${
          winnerPlayer.current !== "draw"
            ? winnerPlayer.current.name + " wins"
            : "draw"
        }`
      );
    } else {
      setCurrReward(null);
      setActiveWheel(true);
      setCurrPlayer((prev) => (prev + 1) % 3);
    }
    setChoice("");
  }, [playersPhrase]);

  const displayModal = (message) => {
    modal_message.current = message;
    setShowModal(true);

    if (winnerPlayer.current === null) {
      setTimeout(() => {
        modal_message.current = "";
        setShowModal(false);
      }, 1500);
    }
  };
  const validatePlayersPhrase = () => {
    if (playersPhrase.toLowerCase() === currPhrase.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  };

  const validatePlayersLetter = () => {
    if (
      chosenLetters.current.indexOf(playersLetter) === -1 &&
      currPhrase.split("").indexOf(playersLetter) !== -1
    ) {
      return true;
    } else {
      return false;
    }
  };
  const phraseCompleteness = () => {
    if (chosenLetters.current.length === currPhrase.length) {
      return true;
    } else {
      return false;
    }
  };

  const reloadGame = () => {
    window.location.reload();
  };
  return (
    <AppContext.Provider
      value={{
        initiation,
        setInitiation,
        player1,
        setPlayer1,
        player2,
        setPlayer2,
        player3,
        setPlayer3,
        currPlayer,
        setCurrPlayer,
        currReward,
        setCurrReward,
        choice,
        setChoice,
        playersLetter,
        setPlayersLetter,
        chosenLetters,
        phrases,
        playersPhrase,
        setPlayersPhrase,
        activeWheel,
        setActiveWheel,
        currPhrase,
        showModal,
        modal_message,
        displayModal,
        winnerPlayer,
        reloadGame,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(AppContext);
}
export { AppProvider };
