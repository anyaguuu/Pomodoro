import styled from "styled-components";
import { Box } from "@material-ui/core";

export const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
`;

export const Title = styled.div`
  font-family: Arial;
  color: #4e4e4e;
  font-size: 3.5em;
  margin-bottom: 1em;
`;

export const TimerBox = styled(Box)`
  height: 40vh;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 5em;
`;

export const OuterButtonBox = styled(Box)`
  margin-top: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonBox = styled.button`
  background-color: #5db8a3;
  color: #ffffff;
  font-size: 1.6em;
  border: none;
  border-radius: 4px;
  height: 4.5em;
  width: 14em;
  margin: 0 1em;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #438f7d;
  }
`;
