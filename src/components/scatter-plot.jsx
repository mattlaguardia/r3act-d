import React from 'react';
import d3 from 'd3';
import DataCircles from './data-circles';
import XYAxis from './x-y-axis';

// returns the largest x coordiante from the data set //
const xMax = (data) => d3.max(data, (d) => d[0]);

// returns the highests y coordinate from the data set //
const yMax = (data) => d3.max(data, (d) => d[1]);

// returns a function that scales x coordinates from the data to fit the chart //
const xScale = (props) => {
  return d3.scale.linear()
    .domain([0, xMax(props.data)])
    .range([props.padding, props.width - props.padding * 2]);
};

// returns a function that scales y coordinates from the data to fit the chart //
const yScale = (props) => {
  return d3.scale.linear()
    .domain([0, yMax(props.data)])
    .range([props.height - props.padding, props.padding]);
};
const marshalProps = (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return Object.assign({}, props, scales);
};

export default (props) => {
  const d3Props = marshalProps(props);
  return (
    <svg width={d3Props.width} height={d3Props.height}>
      <DataCircles {...d3Props}/>
      <XYAxis {...d3Props}/>
    </svg>
  )  
}
