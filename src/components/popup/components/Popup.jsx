import { useEffect, useRef } from "react";
import { Container } from "@/components";
import "./popup.scss";

export function Popup({ isOpen, children, handlerClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (dialog.current) {
      if (isOpen) dialog.current.showModal();
      else dialog.current.close();
    }
  }, [isOpen, dialog]);

  return (
    <dialog id="popup" className="popup" ref={dialog}>
      <button onClick={() => handlerClose()} className="popup-close">
        X
      </button>

      <Container>{children}</Container>
    </dialog>
  );
}
