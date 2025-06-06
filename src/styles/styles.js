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
  font-size: 150px;
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
  grid-template-columns: repeat(${({ $letterCount }) => $letterCount}, 60px);
  gap: 10px;
`;

export const CardWrapper = styled.div`
  width: 60px;
  height: 80px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "none")};
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  border: 2px solid #000;
  border-radius: 8px;
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
