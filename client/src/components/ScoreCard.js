import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { updateUser } from '../service/api';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "auto",
    marginLeft:"auto",
    position: 'absolute',
    // float:'left',
    // height: '80%',
    top:'70px',
    background:'#195e1d',
    color: '#e0f7fa'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
    color: '#a5d6a7'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({score,level,setLevel,m,n,setM,setN,highScore, setHighScore, account}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  
  useEffect(() => {
    
  if(score>=(Math.pow(2,level)+1)*100){
    setLevel(level+1);
  }else if(level>1&&score<(Math.pow(2,level-1)+1)*100) setLevel(level-1);
  // else if(score<0)
  if(highScore<score) {
    setHighScore(score);
    updateUser({highScore:score,googleId:account.googleId});
  }
    
  }, [score])
  
useEffect(()=>{
  setM(4+level);
  setN(4+level);
},[level]);
  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h3" component="h1">
          Score Board:
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>

          Total Score: {score}
          <br></br>
          Level: {level}
          <br></br>
          High Score: {highScore}
        </Typography>
        
        <Typography variant="body2" component="p">
          {(Math.pow(2,level)+1)*100-score} points more needed to upgrade to level {level+1}.
        </Typography>
      </CardContent>
      
    </Card>
  );
}

