import React from "react";
import "./chartbox.scss";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
  };

const ChartBox = (props : Props) => {
  return (
    <div className="chart-box">
      <div className="box-info">
        <div className="title">
            <img className="icon"  src={props.icon} />
            <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="" style={{color : props.color}}>
            View All
        </Link>
      </div>
      <div className="chart-info">
        <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
        <LineChart  data={props.chartData}>
            <Tooltip 
            contentStyle={{background:"transparent",border:'none'}}
            labelStyle={{display : "none"}}
            position={{x :10,y:50}}
            />
          <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
        </div>
        <div className="texts">
            <span className="percentage" style={{color : props.percentage < 0 ? 'tomato' : "green"}}>
              {props.percentage}%
            </span>
            <span className="duration">
                 this month
            </span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
