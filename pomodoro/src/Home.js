import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Page,TimerBox,Title } from './HomeStyles';
import React, {useState, useRef, useEffect} from "react";

export default function Home() {
  const Ref = useRef(null);

  const [timer, setTimer] = useState('00:00:00'); // the state for timer

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total, hours, minutes, seconds
    }
  }

  const startTimer = (e) => {
    let {total, hours, minutes, seconds} = getTimeRemaining(e);
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

  const startMin = 25;

  const clearTimer = (e) => {
    setTimer('00:'+startMin+':00'); // where it starts from

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
  }

  return(
    <Page>
      <Title> Pomodoro </Title>
      <TimerBox>{timer}</TimerBox>
      <button onClick={onClickReset}>Reset</button>
    </Page>
  )

  // return (
  //   <div style={{ color: 'blue', lineHeight : 10}}> 
  //     Inline Styled Component
  //   </div>
  // );
}