import React from "react";
import { useGlobalContext } from "../context";
import "../assets/styles/modal.css";

function Modal({ message }) {
  const { modal_message, winnerPlayer, reloadGame } = useGlobalContext();

  return (
    <div className="modal-container">
      <div className="modal">
        <div>{modal_message.current}</div>
        {winnerPlayer.current != null && (
          <button
            onClick={() => {
              reloadGame();
            }}
          >
            AGAIN
          </button>
        )}
      </div>
    </div>
  );
}

export { Modal };
