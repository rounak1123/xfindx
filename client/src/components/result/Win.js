import { Dialog,  withStyles, Box, makeStyles, Button } from "@material-ui/core";
import { useState } from "react";


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
    background:"green",
    color:'white',
    fontSize:"35px",
    borderRadius:'20px'

  },
};
const useStyles = makeStyles({
  component: {
    display: "flex",
    width: '50%',
    margin:'auto',
    marginTop:'auto',
    // background:'white',
    fontSize:'30px',
    textAlign:'center',
    
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

const Win = ({ classes,win,setWin }) => {

   const [flag,setFlag] = useState(false);
   

   


  const classname = useStyles();
  return (
    <Dialog open={win==1} classes={{ paper: classes.dialogPaper }} >
      <Box className={classname.component}>
      <Button onClick={()=> setWin(-1)} style={{background:'white', margin:'auto', fontSize:'28px'}}>NEXT</Button>
      </Box>
    </Dialog>
  );
};

export default withStyles(Style)(Win);
