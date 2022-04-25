import {
    Dialog,
    Paper,
    withStyles,
    Box,
    Typography,
    makeStyles,
    ListItem,
    List,
  } from "@material-ui/core";
  
  import { useContext } from "react";
  
  import { GoogleLogin } from "react-google-login";
  
  //component
//   import { AccountContext } from "../../context/AccountProvider";
  import { addUser } from "../service/api";
  
  const useStyles = makeStyles({
    component: {
      display: "flex",
    },
    leftComponent: {
      padding: "56px 0px 56px 56px",
    },
    qrCode: {
      padding: "50px 50px 50px 50px",
      height: 200,
      width: 200,
    },
    title: {
      fontSize: "20px",
      marginBottom: 10,
      color: "#525252",
      fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
      fontWeight: 300,
    },
    list: {
      "& > *": {
        fontSize: 14,
        marginTop: 8,
        padding: 0,
        lineHeight: '28px',
        color: '#4a4a4a'
      },
      googleLogin: {
        position: "absolute",
        top: "200px",
      },
    },
  });
  
  const Style = {
    dialogPaper: {
      height: "95%",
      width: "60%",
      marginTop: "12%",
      boxShadow: "none",
      borderRadius: "0",
      maxWidth: "100%",
      maxHeight: "100%",
      overflow: 'hidden',
    },
  };
  
  const Login = ({ classes , account, setAccount}) => {
   
  
    const classname = useStyles();
  
    const onLoginFailure = () => {
      console.log("Login Failure");
    };
  
    const onLoginSuccess = async (res) => {
      console.log(res);
      console.log("Login Success");
     await addUser(res.profileObj);
      setAccount(res.profileObj);
    };
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    return (
      <div>
        <Dialog
          open={true}
          classes={{ paper: classes.dialogPaper }}
          BackdropProps={{ style: { backgroundColor: "unset" } }}
        >
          <Box className={classname.component}>
            <Box className={classname.leftComponent}>
              <Typography className={classname.title}>
                Welcome to the FindX game!<br/><br/>
                How to Play:
              </Typography>
              <List className={classname.list}>
                <ListItem>1. Click on the Google Login button on the right to login via google account.</ListItem>
                <ListItem>
                  2. Simply find the Letter shown below from the given grid of letters.
                </ListItem>
                <ListItem>
                  3. Faster you find the letter with in given time, more points you will score.
                </ListItem>
                <ListItem>
                  4. If you were unable to find the letter in given time or clicked the wrong letter, score will be reduced by 50 points.
                </ListItem>
                <ListItem>
                  5. Click Reset or Logout for resetting or logging out from the game.

                </ListItem>
              </List>
            </Box>
            <Box style={{ position: "relative" }}>
              <Box style={{ position: "absolute", right: "40%", top: "30%" }}>
                <GoogleLogin
                  buttonText=""
                  isSignedIn={true}
                  clientId={clientId}
                  onSuccess={onLoginSuccess}
                  onFailure={onLoginFailure}
                />
              </Box>
              <img
                src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg"
                alt="qr-code"
                className={classname.qrCode}
              />
            </Box>
          </Box>
        </Dialog>
      </div>
    );
  };
  
  export default withStyles(Style)(Login);
  