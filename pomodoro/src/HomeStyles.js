import styled from "styled-components";
import {Box,Button} from "@material-ui/core";

export const Page = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    background-color: #e8d35d;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    font-family: Arial;
    color: purple;
    padding: 5vh 0px 5vh 0px;
    font-family: Josefin Sans;
    font-weight: bold;
    font-size: 7em;
`

export const TimerBox = styled(Box)({
    height: "21vh",
    width: "42vw",
    justifyContent: "center",
    alignItmes: "center",
    display: "flex",
    backgroundColor: "white",
    fontSize: "9em",
    borderRadius: "10px",
    border: "2px solid",
    borderColor: "black",
});

export const OuterButtonBox = styled(Box)({
    height: "10vh",
    width: "30vw",
    marginTop: "3vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
});

export const ButtonBox = styled.button`
    background-color: white;
    color: black;
    font-size: 20px;
    border-radius: 1vw;
    height: 5vh;
    width: 15vw;
    margin-top: 2vh;
    margin-left: 1vw;
    margin-right: 1vw;
`