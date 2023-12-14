import "../css/App.css";
import Game3072 from "./Game3072";
import "../css/Cell.css";
import InstructionsModal from "./InstructionsModal";
import { useState } from "react";

const SIZE = 4;
export default function Game2_3072() {
  const [showModal, setShowModal] = useState(true);
  const [closing, setClosing] = useState(false);

  const onClose = () => {
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setClosing(false);
    }, 1000);
  };

  return (
    <div className={`${closing ? "closing" : ""}`}>
      {showModal && (
        <InstructionsModal onClose={onClose} closing={closing}>
          <h1 className="mt-6 text-2xl">Welcome to 3072!</h1>
          <ul className="list-disc my-6 font-medium">
            <li>The game is played on a 4x4 grid.</li>
            <li>
              Use your arrow keys (Up, Down, Left, Right) to move the blocks.
            </li>
            <li>
              When two blocks with the same number touch, they merge into one
              with their sum!
            </li>
            <li>
              The goal is to combine blocks to create a block with the number
              '3072'.
            </li>
            <li>
              The game is over when the grid is filled, and you cannot make a
              valid move.
            </li>
            <li>
              Although mobile-responsive, swipe controls are not implemented;
              please use a laptop or desktop and arrow keys.
            </li>
          </ul>
        </InstructionsModal>
      )}
      <div className={`game-container ${showModal ? "filter blur-md" : ""}`}>
        <Game3072 size={SIZE} />
      </div>
    </div>
  );
}
