import { useState } from "react";
import PreLoader from "../Portfolio/components/other/PreLoader";
import { GameMemory } from "../memoryGame";
import InstructionsModal from "../3072/components/InstructionsModal";

export const MomoryGame = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div>
      {showModal && (
        <InstructionsModal
          onClose={() => setShowModal(false)}
          closing={!showModal}
        >
          <ul className="list-disc my-6 font-medium">
            <li>The game consists of a grid of facedown cards.</li>
            <li>
              Click on two cards to reveal them. If they match, they stay face
              up; otherwise, they flip back face down.
            </li>
            <li>Your goal is to find all pairs of matching cards.</li>
            <li>
              The game is won when all pairs have been successfully matched and
              the entire grid is revealed.
            </li>
            <li>
              Remember the positions of the cards to improve your matching
              strategy.
            </li>
            <li>
              The game is over when all pairs are found, or when you decide to
              end the game.
            </li>
            <li>
              Feel free to challenge yourself by completing the game in the
              fewest moves possible!
            </li>
          </ul>
        </InstructionsModal>
      )}
      <GameMemory />
    </div>
  );
};
