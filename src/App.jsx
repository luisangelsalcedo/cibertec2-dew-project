import { PopupProvider } from "./components/popup";
import { MainRouter } from "./router/MainRouter";

export function App() {
  return (
    <>
      <PopupProvider>
        <MainRouter />
      </PopupProvider>
    </>
  );
}
