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

// в src/styles/styles.js добавь
export const RoundTitle = styled.h2`
  font-size: 28px;
  font-weight: 900; /* жирнее */
  color: #fff; /* белый цвет */
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7); /* для читаемости на фоне */
`;
