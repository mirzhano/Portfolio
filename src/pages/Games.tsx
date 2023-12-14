import React, { useState } from "react";
import { Board } from "../games/xo/components/Board";
import PreLoader from "../Portfolio/components/other/PreLoader";
import InstructionsModal from "../3072/components/InstructionsModal";

export const Games = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && (
        <InstructionsModal
          onClose={() => setShowModal(false)}
          closing={!showModal}
        >
          <h1 className="mt-6 text-2xl">Welcome to the Tic-Tac-Toe Game!</h1>
          <ul className="list-disc my-6 font-medium">
            <li>The game board is a 3x3 grid.</li>
            <li>
              Players take turns placing their symbol (X or O) in an empty cell
              on the grid.
            </li>
            <li>
              The first player to get three of their symbols in a row
              (horizontally, vertically, or diagonally) wins the game.
            </li>
            <li>
              If the grid is filled and no player has three in a row, the game
              is a draw.
            </li>
            <li>Click on an empty cell to make your move.</li>
            <li>The game alternates between X and O turns.</li>
            <li>
              Pay attention to your opponent's moves and strategize to block
              them from getting three in a row.
            </li>
            <li>
              The game ends when a player wins, there is a draw, or you decide
              to end the game.
            </li>
          </ul>
        </InstructionsModal>
      )}
      <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4 transition-colors duration-300 dark:bg-black dark:text-white">
        <Board />
      </main>
    </>
  );
};
