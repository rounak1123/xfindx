import React from 'react';
import { Box } from '@material-ui/core';


function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}


function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    // if (hex.length !== 6) {
    //     throw new Error('Invalid HEX color.');
    // }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    console.log(r,g,b);
    return '#' + padZero(r) + padZero(g) + padZero(b);
    
}
function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
  }

  function hexToRgb(hex) {
    const hexCode = hex.charAt(0) === '#' 
                        ? hex.substr(1, 6)
                        : hex;

    const hexR = parseInt(hexCode.substr(0, 2), 16);
    const hexG = parseInt(hexCode.substr(2, 2), 16);
    const hexB = parseInt(hexCode.substr(4, 2), 16);
    // Gets the average value of the colors
    const contrastRatio = (hexR + hexG + hexB) / (255 * 3);

    return contrastRatio >= 0.5
        ? 'black'
        : 'white';
}

const Cell = ({character,count,setCount,x1,y1,i,j,setWin}) => {
    var x = Math.floor((Math.random())*26);
    // var cnt=0;
    // if(String.fromCharCode(x+65)==character){
    //     // setCount(count+1);
    //     // console.log(1);
    //     // // console.log(count);
    // }

    const charClicked = ()=>{
       console.log(String.fromCharCode(x+65),"clicked");
       if(x==character) {setWin(1);}
       else setWin(0);
    }

    if(x1==i&&y1==j) {x = character; console.log(x);}
    else{
    while(x==character) x = Math.floor((Math.random())*26);}

    var hex = Math.floor(Math.random()*16777215).toString(16);
    var bgColor = "#" +hex;
    var invColor =  hexToRgb(bgColor);
  return (
    <div style={{padding: "5px",marginBottom:"3px" ,background:bgColor ,color:invColor,display:"inline-block",textAlign:"center",width:"50px",heigh:"50px"} } onClick = {charClicked}>
     {String.fromCharCode(x+65)}
    </div>
  )
}

export default Cell;