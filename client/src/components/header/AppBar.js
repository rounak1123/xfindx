import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from '@material-ui/core';
import { GoogleLogout } from "react-google-login";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'black!important',
  },
  logout: {
    border: 'none !important',
    boxShadow: 'none !important',
    marginRight:'7vw'
},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({account, setScore, setLevel,setReset,reset,setWin,highScore,setAccount}) {
  const classes = useStyles();
  // const highScore = 900;
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const onLogoutSuccess =()=>{
    alert('You have been Logged out Successfully.');
    console.clear();
    setAccount('');
}

const onLogoutFailure = ()=>{
    console.log("Logout Failed");
}
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background:'black'}}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          <Typography variant="h6" className={classes.title}>
            Highest Score :  {highScore}
          </Typography>
          <Avatar src={account.imageUrl} style={{marginRight:'10px'}}/>
          <Typography variant="h6" className={classes.title}>
          {account.givenName} {account.familyName}
          </Typography>
          {/* <Button color='red'>RESET</Button> */}
          <GoogleLogout
            className={classes.logout}
            buttonText="Logout"
            isSignedIn={true}
            clientId={clientId}
            onLogoutSuccess={onLogoutSuccess}
            onLogoutFailure={onLogoutFailure}
            />
          <Button color="inherit" onClick={()=>{
            setScore(0); setLevel(1); 
            setReset(1^reset);
            // setWin(-1);
            }}>RESET</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
