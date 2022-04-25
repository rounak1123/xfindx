import { Box ,makeStyles, Typography} from '@material-ui/core';
import React , {useEffect, useState} from 'react'
import Timer from '../Timer';
// import Cell from './Cell'
import Row from './Row';

const useStyles = makeStyles({
    grid:{
        marginTop: '10vh',
        width: '100%',
        // margin: 'auto',
        // position: 'relative',
        // left: '20%',
        
 
    },
    timer:{
        // alignItems:'center'
        // marginLeft:'auto'
        justifyContent: 'center',
        height:"80px",
        width:"100%",
        marginLeft:'43vw',
        marginTop: '40px',
        display: 'block',
        fontSize: '40px',
        fontWeight: 'bold'

    },
    main:{
      width:'100%',
    }
})


const Grid = ({win,setWin, score, setScore,m,n,reset,setReset, highScore, setHighScore}) => {
    const [count,setCount] = useState(0);


    useEffect(()=>{
     console.log('reset clicked');
    },[reset])
    // let m=5,n=5;
    let arr = [];
    var x = Math.floor((Math.random())*26);
    let st = String.fromCharCode(x+65);
    var x1 = Math.floor((Math.random())*m);
    var y1 = Math.floor((Math.random())*n);


    console.log(x1,y1,st);
    for(let i=0;i<m;i++){
        // let arr1 =  []
        
        arr.push(<Row  character = {x} count = {count} setCount = {setCount}  x1 = {x1} y1={y1} i={i} setWin = {setWin} n={n}/>);
    }

    const classes = useStyles();
  return (
  <>

    <Box className ={classes.main}>
    <Box className ={classes.grid}>
    {arr}
    </Box>

    <Typography  className= {classes.timer}> Find <span style={{
      display:'inline',background: "rgb(0, 0, 0)",
    color: "rgb(86, 111, 241)",
    fontSize: "80px",
    padding: "5px 5px",
    borderRadius: "10px"}}>{st}</span> in  </Typography><Timer win={win} setWin={setWin} score={score} setScore={setScore} reset={reset} highScore={highScore} setHighScore={setHighScore}/> 
    </Box>
    </>
    
  
  );
}

export default Grid;