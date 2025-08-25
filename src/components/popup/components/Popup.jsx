import { useEffect, useRef } from "react";
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
    <dialog id="popup" className="modal" ref={dialog}>
      <header>
        <button onClick={() => handlerClose()} className="btn btn-black">
          X
        </button>
      </header>

      <div className="content">{children}</div>
    </dialog>
  );
}
