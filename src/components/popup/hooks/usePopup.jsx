import { useContext } from "react";
import { PopupContext } from "../contexts/popup.context";

export function usePopup() {
  const context = useContext(PopupContext);

  return context;
}
