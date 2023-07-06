import "../assets/styles/gameStats.css";
import { useGlobalContext } from "../context";
import avatar0 from "../avatars/avatar0.jpeg";
import avatar1 from "../avatars/avatar1.jpg";
import avatar2 from "../avatars/avatar2.jpg";

function GameStats() {
  const { player1, player2, player3, currPlayer } = useGlobalContext();

  return (
    <div className="stats">
      <div className={`player ${currPlayer === 0 && "player1"}`}>
        <img src={avatar0} className="avatar" alt="avatar player 1" />
        <div className="name">{player1.name}</div>
        <div className="score">{player1.score}</div>
      </div>
      <div className={`player ${currPlayer === 1 && "player2"}`}>
        <img src={avatar1} className="avatar" alt="avatar player 2" />
        <div className="name">{player2.name}</div>
        <div className="score">{player2.score}</div>
      </div>
      <div className={`player ${currPlayer === 2 && "player3"}`}>
        <img src={avatar2} className="avatar" alt="avatar player 3" />
        <div className="name">{player3.name}</div>
        <div className="score">{player3.score}</div>
      </div>
    </div>
  );
}

export { GameStats };
