import { Dialog,  withStyles, Box, makeStyles, Button } from "@material-ui/core";


const Style = {
    dialogPaper: {
      height: "200px",
      width: "55%",
      marginTop: "40px",
      boxShadow: "none",
      borderRadius: "0",
      maxWidth: "100%",
      maxHeight: "100%",
      overflow: "hidden",
      marginBottom: "20px",
      background:"red",
      color:'white',
      fontSize:"35px",
      borderRadius:'20px'
    },
  };
const useStyles = makeStyles({
  component: {
    display: "flex",
    width: '100%',
    margin:'auto',
    textAlign:'center',
    padding:'auto',
    // background:'white',
    fontSize:'30px'
  },
  leftComponent: {
    minWidth: 380,
    height: "12%",

    background: "#ededed",
  },
  rightComponent: {
    borderLeft:"1px solid rgba(0,0,0,0.14)",
    height: "100%",
    width: '70%',
    minWidth: '300px',
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    height: 40,
    background: "#3264ff",
  },
});

const Lose = ({ classes,win ,setWin}) => {

//   const {person} = useContext(UserContext);

// console.log(win);
  const classname = useStyles();
  return (
    <Dialog open={win==0} classes={{ paper: classes.dialogPaper }} >
      <Box className={classname.component}>
       Please Try Again :)
      </Box>
      <Button onClick={()=> setWin(-1)} style={{background:'white', margin:'auto', fontSize:'28px'}}> Try Again.</Button>
    </Dialog>
  );
};

export default withStyles(Style)(Lose);
