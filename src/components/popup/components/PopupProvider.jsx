import { useState } from "react";
import { Popup } from "./Popup";
import { PopupContext } from "../contexts/popup.context";

export function PopupProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openModal = (content) => {
    setIsOpen(true);
    setContent(content);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <PopupContext.Provider value={{ isOpen, openModal, closeModal }}>
      <Popup isOpen={isOpen} handlerClose={closeModal}>
        {content}
      </Popup>
      {children}
    </PopupContext.Provider>
  );
}
