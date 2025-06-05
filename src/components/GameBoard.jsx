import React, { useEffect, useState } from "react";
import { Board, CardWrapper, Front, Back, RoundTitle } from "../styles/styles";

const ROUNDS = ["МОРКОВЬ", "КАЛЫМА", "ЛЕША", "ГЕНОФОНД"];

export default function GameBoard() {
  const [currentRound, setCurrentRound] = useState(0);
  const [flipped, setFlipped] = useState([]);
  const word = ROUNDS[currentRound];
  const letters = word.split("");

  useEffect(() => {
    setFlipped(Array(letters.length).fill(false));
  }, [letters.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();

      if (key === "ARROWRIGHT") {
        setCurrentRound((prev) => Math.min(prev + 1, ROUNDS.length - 1));
      } else if (key === "ARROWLEFT") {
        setCurrentRound((prev) => Math.max(prev - 1, 0));
      } else if (key.length === 1 && /[А-ЯЁ]/.test(key)) {
        setFlipped((prev) =>
          prev.map((f, i) => f || letters[i].toUpperCase() === key)
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [letters]);

  return (
    <>
      <RoundTitle>Раунд {currentRound + 1}</RoundTitle>
      <Board $letterCount={letters.length}>
        {letters.map((letter, index) => (
          <CardWrapper key={index} flipped={flipped[index]}>
            <Front>{letter}</Front>
            <Back>{letter}</Back>
          </CardWrapper>
        ))}
      </Board>
    </>
  );
}
