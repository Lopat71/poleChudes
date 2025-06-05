import React from "react";
import GameBoard from "./components/GameBoard";
import FullscreenButton from "./components/FullscreenButton";
import { AppContainer } from "./styles/styles"; // <-- обязательно

export default function App() {
  return (
    <AppContainer>
      <FullscreenButton />
      <GameBoard />
    </AppContainer>
  );
}
