import React from "react";
import { useGlobalContext } from "../context";
import "../assets/styles/playersInterface.css";

function PlayersInterface(props) {
  const [change, setChange] = React.useState("");
  const {
    choice,
    setChoice,
    setPlayersLetter,
    setPlayersPhrase,
    currReward,
    displayModal,
  } = useGlobalContext();

  function handleChange(e) {
    setChange(e.target.value.toUpperCase());
  }

  function submit() {
    if (choice === "letter") {
      const reg = /^[bcdfghjklmnpqrstvwxysżźćńółęąśŻŹĆĄŚĘŁÓŃ]{1}$/i;

      if (reg.test(change)) {
        console.log("correct");
        setPlayersLetter(change);
      } else {
        displayModal("ENTER A CONSONANT!");
      }
    }

    if (choice === "phrase") {
      const reg = /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+/;

      if (reg.test(change)) {
        console.log("correct");
        setPlayersPhrase(change);
      } else {
        displayModal("ENTER A PHRASE!");
      }
    }
    setChange("");
  }
  return (
    <div className="interface">
      {choice === "" ? (
        <div>
          <button
            onClick={() => {
              if (currReward) {
                setChoice("letter");
              } else {
                displayModal("SPIN THE WHEEL!");
              }
            }}
          >
            GUESS A LETTER
          </button>
          <button
            onClick={() => {
              setChoice("phrase");
            }}
          >
            GUESS A PHRASE
          </button>
        </div>
      ) : (
        <div>
          {choice === "letter" ? (
            <input
              placeholder={`ENTER A ${choice.toUpperCase()}`}
              onChange={handleChange}
              value={change}
              maxLength={1}
            />
          ) : (
            <input
              placeholder={`ENTER A ${choice.toUpperCase()}`}
              onChange={handleChange}
              value={change}
            />
          )}
          <button onClick={submit}>Enter</button>
          <button
            onClick={() => {
              setChoice("");
            }}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export { PlayersInterface };
