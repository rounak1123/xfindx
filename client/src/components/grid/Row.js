import React from 'react'
import Cell from './Cell'
const Row = ({character,count,setCount,x1,y1,i,setWin,n}) => {
    let arr1 = [];
    // let m= 10;
    for(let j=0;j<n;j++){
        arr1.push(<Cell character = {character} count={count} setCount = {setCount} x1 = {x1} y1 = {y1} i = {i} j={j} setWin = {setWin}/>);
    }
  return (
    <div style={{margin:"auto"}}><div style={{marginLeft: window.innerWidth/2-(n*25)}}>{arr1}</div></div>
  )
}

export default Row