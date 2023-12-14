import Button from "./Button";
import { MouseEventHandler, ReactNode } from "react";

interface InstructionsModalProps {
  onClose: MouseEventHandler<HTMLSpanElement>;
  closing: boolean;
  children?: ReactNode;
}

export default function InstructionsModal({
  onClose,
  closing,
  children,
}: InstructionsModalProps) {
  return (
    <div className={`modal-overlay ${closing ? "closing" : ""}`}>
      <div className="modal">
        <div className="modal-content px-8">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          {children}
          <Button clickFunction={onClose} buttonMessage={"Understood"} />
        </div>
      </div>
    </div>
  );
}
