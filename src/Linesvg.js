import React, {useEffect, useState}  from 'react';
import Line from './Line';

const Linesvg = (props) => {

const [linelistnz, setLinelistnz] = useState([]);
const viewboxval = `0 0 ${props.canvas[0]} ${props.canvas[1]}`;

 const generateColor = (i) => {
    // This function generates a color based on the iteration number
    // For example, the first iteration will have the color 'red', the second 'green', and so on
    const colors = props.colors;
    return colors[i];
  }


 const generateWidth = (i) => {
    const width = props.width;
    return width[i];
  }

 const generateLinecap = (i) => {
    const linecap = props.linecap;
    return linecap[i];
  }

useEffect(() => {
    const linelist = [];
    for(let x = 0, y = 0; x < props.points.length, y < props.height.length; x++, y++){
         if(props.points[x+1] !== undefined && props.height[y+1] !== undefined){
         const color = generateColor(x);
         const width = generateWidth(x);
         const linecap = generateLinecap(x);
        linelist.push(<g key={x}><Line color={color} width={width} linecap={linecap} x1={props.points[x]} 
y1={props.height[y]} x2={props.points[x+1]} y2={props.height[y+1]}  /></g>);
     }
    }
    setLinelistnz(linelist);
},[props.points]);

return(
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
 viewBox={viewboxval} >
{linelistnz}
  Sorry, your browser does not support inline SVG.
</svg>

</div>
);

} 

export default Linesvg;
