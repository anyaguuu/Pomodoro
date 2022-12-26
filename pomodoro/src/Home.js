import {Page, Title, TimerBox, OuterButtonBox, ButtonBox} from "./HomeStyles";
import React, {useState, useEffect, Fragment} from 'react';
import { TextField} from "@material-ui/core";

import {gql, useMutation, useQuery} from "@apollo/client";

const START_WORK_MINUTES = '25';
const START_SHORT_BREAK_MINUTES = '5';
const START_SECONDS = '00';
const START_DURATION = 10;


export default function Home () {

  const GET_USER = gql`
    query GetUserInfo {
      userOne {
        name
        gender
      }
    }
  `

  const UPDATE_USER = gql`
    mutation UpdateUser(
      $name: String!
      $gender: String!
    ) {
      userUpdateOne (
        record: {
          name: $name
          gender: $gender
        }
      ) {
        record {
          _id
          name
          gender
        }
      }
    }
  `

  // const [user, setUser] = useState({ // makes it wrong for some reason
  //   name: user.name,
  // })

  const [currentMinutes, setMinutes] = useState(START_WORK_MINUTES);
  const [currentSeconds, setSeconds] = useState(START_SECONDS);
  const [isStop, setIsStop] = useState(false);
  const [duration, setDuration] = useState(START_DURATION);
  const [isWorking, setIsWorking] = useState(false);
  const [isBreak, setisBreak] = useState(false);

  const startHandler = (numMin) => {
    // console.log("numMin: " + parseInt(JSON.stringify(numMin),10));
    let minInt = parseInt(numMin);
    let newDuration = parseInt(START_SECONDS,10) + 60 * minInt; 
    setDuration(newDuration);
    // setMinutes(60 * 5);
    // setSeconds(0);
    if (minInt === START_WORK_MINUTES) {
      setIsWorking(true);
      setisBreak(false);
      setIsStop(false);
    }
    else { // break
      setIsWorking(false);
      setisBreak(true);
      setIsStop(false);
    }
    
  };

  const stopHandler = () => {
    // stop timer
    setIsStop(true);
    setIsWorking(false);
    setisBreak(false);
  };
 
  const resetHandler = () => {
    // reset timers
    setMinutes(START_WORK_MINUTES); // TODO: change this
    setSeconds(START_SECONDS);
    setIsWorking(false);
    setIsStop(false);
    setisBreak(false);
    setDuration(START_DURATION);
  };

  const resumeHandler = (isBreak) => {
    let newDuration = parseInt(currentMinutes, 10) * 60 + parseInt(currentSeconds, 10);
    setDuration(newDuration);

    if (!isBreak) { // working
      setIsWorking(true);
      setIsStop(false);
    }
    else { // on break
      setisBreak(true); // prob unnecessary
      setIsStop(false);
    }
  }

  useEffect(() => { // TODO: prob have to change this part
    if (isWorking === true) {
      let timer = duration;
      var minutes, seconds;
      const interval = setInterval(function () {
        if (--timer <= 0) {
          resetHandler();
        } else {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? '0' + minutes : minutes;
          seconds = seconds < 10 ? '0' + seconds : seconds;

          setMinutes(minutes);
          setSeconds(seconds);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isWorking,isBreak, duration]); // dependency -- only runs when dependency changes

  //backend stuff
  const [updateUser] = useMutation(UPDATE_USER); // communicate w backend
  let {data, loading, error} = useQuery(GET_USER); // query

  if (loading) return <p>LOADING</p>;
  if (error) return `Error! ${error.message}`;
  return (
  <div>
    <Page>
    <Fragment> 
      <Title>Pomodoro</Title>
      <TimerBox>{currentMinutes}:{currentSeconds}</TimerBox>
      <OuterButtonBox>
      {!isWorking && !isStop && (
        <ButtonBox onClick={() => {startHandler(START_WORK_MINUTES)}}>Start Pomodoro</ButtonBox>
      )}
      {(isWorking || isBreak) && (
        <ButtonBox onClick={stopHandler}>Stop</ButtonBox>
      )}
      {isStop && (
        <ButtonBox onClick={resumeHandler}>Resume</ButtonBox>
      )}

      {!isBreak && (
        <ButtonBox onClick={() => {startHandler(START_SHORT_BREAK_MINUTES)}} disabled={(isWorking || isBreak)}>Start Short Break</ButtonBox>
      )}
      {isBreak && (
        <ButtonBox onClick={stopHandler} disabled={!isBreak}>Stop Short Break</ButtonBox>
      )}
      </OuterButtonBox>
      <OuterButtonBox>
        <ButtonBox onClick={resetHandler} disabled={isStop || (!isWorking&&!isStop&&!isBreak)}>Reset</ButtonBox> 
        <TextField 
          id="outlined-basic" 
          varient="outlined"
          placeholder="user"
        />
      </OuterButtonBox>
      <OuterButtonBox>
        <TextField
        placeholder="queried user"/>
      </OuterButtonBox>
    </Fragment>
    </Page>
  </div>
  )
    }