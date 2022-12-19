import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Page,TimerBox,Title, ButtonBox } from './HomeStyles';
import React, {useState, useRef, useEffect} from "react";

export default function Home() {
  const Ref = useRef(null);

  const startMin = .1; // number of minutes for pomodoro timer

  const showToastMessage = (message) => {
    toast.info(message,{
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
      hideProgressBar: true,
      dragable: true,
    });
  }

  const [timer, setTimer] = useState('00:00:00'); // the state for timer

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);

    // time is up
    if (seconds == 0 && minutes == 0 && hours == 0) {
        showToastMessage("Time's up!");
        <ToastContainer/>
    }
    return {
      total, hours, minutes, seconds
    }
  }

  const startTimer = (e) => {
    let {total, hours, minutes, seconds} = getTimeRemaining(e);
    console.log("total: " + total);
    if (total >= 0) {
      // update the timer
      // check if less than 10 -- add 0 to beginning of variable
      setTimer(
        (hours > 0 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':'
        + (seconds > 9 ? seconds: '0' + seconds)
      )
    }
  }

  const clearTimer = (e) => {
    const minStr = startMin <= 9 ? '0'+startMin : startMin; // TODO: fix this
    setTimer('00:'+minStr+':00'); // where it starts from
    // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
  }

  const getDeadTime = () => {
    let deadline = new Date();
    // adjust if you want to add more time
    deadline.setSeconds(deadline.getSeconds() + 60*startMin);
    return deadline;
  }

  // use this so timer will start asap
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  
  const onClickReset =() => {
    clearTimer(getDeadTime());
    showToastMessage('Timer started');
    <ToastContainer/> // TODO: fix
  }

  const pauseTimer = () => {
    // let currState = timer;
    // console.log(currState);
    // setTimer(currState);
  }

  // const setRunningTrue = () => {
  //   setRunning(true);
  // }

  return(
    <Page>
      <Title> Pomodoro </Title>
      <TimerBox>{timer}</TimerBox>
      <ButtonBox onClick={
        onClickReset
        }>Start timer</ButtonBox>
      <ToastContainer/>
      <ButtonBox onClick={pauseTimer}>Pause</ButtonBox>
      <ToastContainer/>
    </Page>
  )
}