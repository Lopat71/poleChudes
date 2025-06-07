import styled from "styled-components";
import bgImage from "../assets/bg.jpg";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  text-align: center;
  z-index: 5;
  pointer-events: none;
`;

export const RoundTitle = styled.h2`
  font-size: clamp(48px, 10vw, 150px);
  font-weight: 900;
  color: #ffe600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);
  animation: fadeInSlide 0.8s ease-out;

  @keyframes fadeInSlide {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $letterCount }) => $letterCount}, 1fr);
  gap: ${({ $letterCount }) => `${Math.max(2, 8 - $letterCount)}vw`};
  padding: 2vw;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  justify-items: center;
`;

export const CardWrapper = styled.div`
  width: min(18vw, 240px);
  aspect-ratio: 3 / 4;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "none")};

  @media (min-width: 1600px) {
    width: min(16vw, 300px);
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(60px, 10vw, 180px);
  font-weight: 900;
  border: 5px solid #000;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
`;

export const Front = styled(Card)`
  background-color: #0066cc;
  color: transparent;
`;

export const Back = styled(Card)`
  background-color: #ffffff;
  color: #000000;
  transform: rotateY(180deg);
`;
