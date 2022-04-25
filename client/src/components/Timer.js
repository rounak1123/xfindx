import { Typography } from '@material-ui/core';
import React from 'react'
import { useState, useEffect } from 'react';

const Timer = ({win,setWin, score, setScore, reset,highScore, setHighScore}) => {
    const initialMinute = 0,initialSeconds = 15;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
           if(win==-1) { if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }} 
        }, 1000)
        return ()=> {
            if(win==-1)
            clearInterval(myInterval);
          };
    });


    useEffect(()=>{
      if(minutes==0&&seconds==0){
        //   console.log("YOU LOSE!");
        if(win==-1)
        setWin(0);
      }
    },[seconds])
    
    useEffect(()=>{
    if(win==0||win==1){
        if(win==1){
            setScore(score+seconds*10);
        }else if(win==0) {
            setScore(Math.max(0,score-50));}
        setSeconds(15);
        
    }
    if(win==-1&&reset==1) setSeconds(15);
    },[win])

    useEffect(()=>{
     setSeconds(15);
    },[reset])


    return (
        <>
           
        { 
        minutes === 0 && seconds === 0
            ? <Typography style={{display:'inline-block', fontSize:'40px' ,marginLeft: '46vw'}}> 00:00</Typography> 
            : <Typography style={{display:'inline-block', fontSize:'40px'  ,marginLeft: '46vw', marginTop:'40px'}}> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</Typography> 
        }
        </>
    )
}

export default Timer;