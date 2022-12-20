import {Page, Title, TimerBox, OuterButtonBox} from "./HomeStyles";
import React, {useState, useEffect, Fragment} from 'react';

const START_MINUTES = '25';
const START_SECONDS = '00';
const START_DURATION = 10;


export default function Home () {
  const [currentMinutes, setMinutes] = useState(START_MINUTES);
  const [currentSeconds, setSeconds] = useState(START_SECONDS);
  const [isStop, setIsStop] = useState(false);
  const [duration, setDuration] = useState(START_DURATION);
  const [isRunning, setIsRunning] = useState(false);

  const startHandler = () => {
    let newDuration = parseInt(START_SECONDS,10) + 60 * parseInt(START_MINUTES,10);
    setDuration(newDuration);
    // setMinutes(60 * 5);
    // setSeconds(0);
    setIsRunning(true);
  };

  const stopHandler = () => {
    // stop timer
    setIsStop(true);
    setIsRunning(false);
  };
 
  const resetHandler = () => {
    // reset timer
    setMinutes(START_MINUTES);
    setSeconds(START_SECONDS);
    setIsRunning(false);
    setIsStop(false);
    setDuration(START_DURATION);
  };

  const resumeHandler = () => {
    let newDuration = parseInt(currentMinutes, 10) * 60 + parseInt(currentSeconds, 10);
    setDuration(newDuration);

    setIsRunning(true);
    setIsStop(false);
  }

  useEffect(() => {
    if (isRunning === true) {
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
  }, [isRunning]); // dependency -- only runs when dependency changes

  return (
  <div>
    <Page>
    <Fragment>
      <Title>Pomodoro</Title>
      <TimerBox>{currentMinutes}:{currentSeconds}</TimerBox>
      {!isRunning && !isStop && (
        <OuterButtonBox onClick={startHandler}>Start Pomodoro</OuterButtonBox>
      )}
      {isRunning && (
        <OuterButtonBox onClick={stopHandler}>Stop</OuterButtonBox>
      )}
      {isStop && (
        <OuterButtonBox onClick={resumeHandler}>Resume</OuterButtonBox>
      )}

      <OuterButtonBox onClick={resetHandler} disabled={!isRunning&&!isStop}>Reset</OuterButtonBox> 
    </Fragment>
    </Page>
  </div>

  )
}