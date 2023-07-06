import React from "react";
import { useGlobalContext } from "../context";
import avatar0 from "../avatars/avatar0.jpeg";
import avatar1 from "../avatars/avatar1.jpg";
import avatar2 from "../avatars/avatar2.jpg";

function InitialComponent(props) {
  const { setPlayer1, setPlayer2, setPlayer3, setInitiation, displayModal } =
    useGlobalContext();

  const [change, setChange] = React.useState({
    player1: "",
    player2: "",
    player3: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setChange((prev) => ({
      ...prev,
      [name]: value.toUpperCase(),
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("sdd");
    if (Object.values(change).some((el) => el === "")) {
      displayModal("Give every player a name");
      return;
    }

    setPlayer1((prev) => ({ name: change.player1, score: 0 }));
    setPlayer2((prev) => ({ name: change.player2, score: 0 }));
    setPlayer3((prev) => ({ name: change.player3, score: 0 }));

    setInitiation(true);
  }
  return (
    <div className="initial-info">
      <form onSubmit={handleSubmit}>
        <div className="player-box">
          <div className="avatar">
            <img src={avatar0} alt="avatar player 1" />
          </div>
          <input
            placeholder="first player"
            name="player1"
            onChange={handleChange}
            value={change.player1}
            minLength={3}
            maxLength={7}
          ></input>
        </div>
        <div className="player-box">
          <div className="avatar">
            <img src={avatar1} alt="avatar player 2" />
          </div>
          <input
            placeholder="second player"
            name="player2"
            onChange={handleChange}
            value={change.player2}
            minLength={3}
            maxLength={7}
          ></input>
        </div>
        <div className="player-box">
          <div className="avatar">
            <img src={avatar2} alt="avatar player 3" />
          </div>
          <input
            placeholder="third player"
            name="player3"
            onChange={handleChange}
            value={change.player3}
            minLength={3}
            maxLength={7}
          ></input>
        </div>
        <button type="submit">START</button>
      </form>
    </div>
  );
}

export { InitialComponent };
