import { useState } from "react";
import Game2_3072 from "../3072/components/App";
import PreLoader from "../Portfolio/components/other/PreLoader";
import InstructionsModal from "../3072/components/InstructionsModal";

export const G3072 = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
    
      <div className="fff3072">
        <Game2_3072 />
      </div>
    </>
  );
};
