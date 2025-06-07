import React, { useEffect, useState, useRef } from "react";
import {
  Board,
  CardWrapper,
  Front,
  Back,
  RoundTitle,
  TitleWrapper,
} from "../styles/styles";

import pravilnaySound from "../assets/sounds/pravilnayBukva.mp3";
import nePravilnSound from "../assets/sounds/nePraviln.mp3";
import ugadalSlovoSound from "../assets/sounds/ugadalSlovo.mp3";

const ROUNDS = ["ФЕРЗЬ", "БЕРЕГИНЯ", "КУБЫШКА", "ВЫКАТКА", "ЗУМФАТИГ"];

export default function GameBoard() {
  const [currentRound, setCurrentRound] = useState(0);
  const [flipped, setFlipped] = useState([]);
  const word = ROUNDS[currentRound];
  const letters = word.split("");

  const correctAudio = useRef(new Audio(pravilnaySound));
  const wrongAudio = useRef(new Audio(nePravilnSound));
  const winAudio = useRef(new Audio(ugadalSlovoSound));

  useEffect(() => {
    setFlipped(Array(letters.length).fill(false));
  }, [currentRound]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();

      if (key === "ARROWRIGHT") {
        setCurrentRound((prev) => Math.min(prev + 1, ROUNDS.length - 1));
      } else if (key === "ARROWLEFT") {
        setCurrentRound((prev) => Math.max(prev - 1, 0));
      } else if (key.length === 1 && /[А-ЯЁ]/.test(key)) {
        const indices = letters
          .map((char, i) => (char.toUpperCase() === key ? i : -1))
          .filter((i) => i !== -1 && !flipped[i]);

        if (indices.length > 0) {
          indices.forEach((index, i) => {
            setTimeout(() => {
              correctAudio.current.currentTime = 0;
              correctAudio.current.play();

              setFlipped((prev) => {
                const updated = [...prev];
                updated[index] = true;

                const willBeAllOpen =
                  updated.filter(Boolean).length === letters.length;

                if (willBeAllOpen) {
                  setTimeout(() => {
                    winAudio.current.currentTime = 0;
                    winAudio.current.play();
                  }, 600);
                }

                return updated;
              });
            }, i * 1000);
          });
        } else {
          wrongAudio.current.currentTime = 0;
          wrongAudio.current.play();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [letters, flipped]);

  return (
    <>
      <TitleWrapper>
        <RoundTitle>Раунд {currentRound + 1}</RoundTitle>
      </TitleWrapper>
      <Board $letterCount={letters.length}>
        {letters.map((letter, index) => (
          <CardWrapper
            key={index}
            flipped={flipped[index]}
            $letterCount={letters.length}
          >
            <Front>{letter}</Front>
            <Back>{letter}</Back>
          </CardWrapper>
        ))}
      </Board>
    </>
  );
}
