// import { AppBar } from '@material-ui/core'
import { useState,useEffect } from 'react';
import './App.css';
import Grid from './components/grid/Grid';
import ButtonAppBar from './components/header/AppBar';
import Lose from './components/result/Lose';
import Win from './components/result/Win';
import ScoreCard from './components/ScoreCard';
import Timer from './components/Timer';
import Login from './components/Login';
import { getHighScore } from './service/api';

function App() {

  const [win, setWin] = useState(-1);
  const [score,setScore] = useState(0);
  const [level,setLevel] = useState(1);
  const [m,setM] = useState(5);
  const [n,setN] = useState(5);
  const [account,setAccount] = useState(null);
  const [reset, setReset] = useState(0);
  const [highScore, setHighScore] = useState(0);


  useEffect( ()=>{
    if(account){
    const func = async()=>{
   
    //  setHighScore(account)
    const res = await getHighScore({googleId:account.googleId});
    console.log("hmmm",res);
    setHighScore(res.data[0].highScore);
   
  };
   func();}
  },[account]);
  var result = null;

  return (
     <>
    
     
     {account?
     <div >
       <ButtonAppBar account={account} setAccount = {setAccount} setScore={setScore} setLevel={setLevel} setReset={setReset} reset={reset} setWin={setWin} highScore={highScore}/>
     <Grid win={win} setWin = {setWin} setScore={setScore} score={score} m ={m} setM={setM} n={n} setN={setN} reset={reset} setReset={setReset} highScore={highScore} setHighScore={setHighScore}/>
     <ScoreCard score={score} level={level} setLevel={setLevel} m ={m} setM={setM} n={n} setN={setN} highScore={highScore} setHighScore={setHighScore} account={account}/>
    
      <Win win = {win}  setWin={setWin}/>
      <Lose win = {win} setWin ={setWin}/>
    
     
     </div>  :
     <Login account={account} setAccount={setAccount} score={score} />
     }
     

     
     </> 
  );
}

export default App;
