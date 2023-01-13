Installation

You can install this package by running the following command:

npm install lineprogress

Usage

You can use the Linecomp component by importing it in your React application like this:

import Progressline from 'lineprogress';

Here, you need to provide the correct values for the following props:

    canvas: The width and height of the canvas where the chart will be rendered. It should be an array with two values, e.g. [620, 140].
    points: The points on the X-axis where the lines will start. It should be an array of numerical values, e.g. [0, 5, 10, 33, 48, 89].
    height: The points on the Y-axis where the lines will end. It should be an array of numerical values, e.g. [0, 8, 15, 30, 90, 220].
    colors: The color of each line. It should be an array of strings, e.g. ['red', 'blue', 'green', 'yellow', 'purple'].
    width: The width of each line. It should be an array of strings, e.g. ['1px', '2px', '3px', '4px', '5px'].
    linecap: The linecap of each line. It should be an array of string, e.g. ['butt', 'round', 'round', 'round', 'butt'].

This component will render a line chart with the provided configurations.
Note

    The number of elements in points, height, color, width and linecap array should be same.
    Please make sure that you provide the correct values for canvas width and height, and other props as per the instruction provided.
