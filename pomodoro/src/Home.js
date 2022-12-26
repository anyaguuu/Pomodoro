import {Page, Title, TimerBox, OuterButtonBox, ButtonBox} from "./HomeStyles";
import React, {useState, useEffect, Fragment} from 'react';
import { TextField} from "@material-ui/core";

const START_WORK_MINUTES = '25';
const START_SHORT_BREAK_MINUTES = '5';
const START_SECONDS = '00';
const START_DURATION = 10;


export default function Home () {

  const [currentMinutes, setMinutes] = useState(START_WORK_MINUTES);
  const [currentSeconds, setSeconds] = useState(START_SECONDS);
  const [isStop, setIsStop] = useState(false);
  const [duration, setDuration] = useState(START_DURATION);
  const [isWorking, setIsWorking] = useState(false);

  const startHandler = (numMin) => {
    // console.log("numMin: " + parseInt(JSON.stringify(numMin),10));
    let minInt = parseInt(numMin);
    let newDuration = parseInt(START_SECONDS,10) + 60 * minInt; 
    setDuration(newDuration);
    setIsWorking(true);
  };

  const stopHandler = () => {
    // stop timer
    setIsStop(true);
    setIsWorking(false);
  };
 
  const resetHandler = () => {
    // reset timers
    setMinutes(START_WORK_MINUTES); // TODO: change this
    setSeconds(START_SECONDS);
    setIsWorking(false);
    setIsStop(false);
    setDuration(START_DURATION);
  };

  const resumeHandler = (isBreak) => {
    let newDuration = parseInt(currentMinutes, 10) * 60 + parseInt(currentSeconds, 10);
    setDuration(newDuration);

    setIsWorking(true);
    setIsStop(false);
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
  }, [isWorking, duration]); // dependency -- only runs when dependency changes

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
        {isWorking && (
          <ButtonBox onClick={stopHandler}>Stop</ButtonBox>
        )}
        {isStop && (
          <ButtonBox onClick={resumeHandler}>Resume</ButtonBox>
        )}
      </OuterButtonBox>
      <OuterButtonBox>
        <ButtonBox onClick={resetHandler} disabled={!isWorking && !isStop}>Reset</ButtonBox>
      </OuterButtonBox>
    </Fragment>
    </Page>
  </div>
  )
    }