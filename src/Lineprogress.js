import React from 'react';
import Linesvg from './Linesvg';

const Lineprogress = () => {

//Please change value here for canvas width and height
const canvas = [620, 140];
//Plese change points value below, minimum 2 values. Begin from first value as first point and going to another value as another point.
const points = [0, 5, 10, 33, 48, 89];
//Please change height value below for every line
const height = [0, 8, 15, 30, 90, 220];
//Please change colors value below
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
//Please change width value below
const width = ['1px', '2px', '3px', '4px', '5px'];

//Please change linecap value below
const linecap = ['butt', 'round', 'round', 'round', 'butt'];


return(
   <div>
     <Linesvg points={points} colors={colors} width={width} height={height} linecap={linecap} canvas={canvas} />
   </div>
)

}





export default Lineprogress;
