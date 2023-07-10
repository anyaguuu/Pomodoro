import styled from "styled-components";
import { Box } from "@material-ui/core";

export const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #ff7170, #ffe09d, #81d6e3);
  background-size: 600% 600%;
  animation: gradientAnimation 10s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Title = styled.div`
  font-family: "Arial Black", sans-serif;
  color: #ffffff;
  font-size: 4em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1em;

  @media (max-width: 600px) {
    font-size: 2.5em;
  }
`;

export const TimerBox = styled(Box)`
  height: 40vh;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 6em;

  @media (max-width: 600px) {
    height: 30vh;
    width: 80vw;
    font-size: 4em;
  }
`;

export const OuterButtonBox = styled(Box)`
  margin-top: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonBox = styled.button`
  background-color: #81d6e3;
  color: #ffffff;
  font-family: "Arial", sans-serif;
  font-size: 1.8em;
  border: none;
  border-radius: 4px;
  height: 4.5em;
  width: 14em;
  margin: 0 1em;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #64c2d4;
  }

  @media (max-width: 600px) {
    font-size: 1.5em;
    height: 3.5em;
    width: 10em;
  }
`;
