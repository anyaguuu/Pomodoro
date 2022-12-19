import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";


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
    padding: 12vh 0px 0px 0px;
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
})

export const ButtonBox = styled(Button)({
    fontFamily: "Josefin Sans",
    fontSize: "2vh",
    // background: "#2075D8",
    backgroundColor: "white",
    color: "white",
    borderRadius: "2vw",
    width: "10vw",
    height: "10vh",
    textTransform: "none",
})