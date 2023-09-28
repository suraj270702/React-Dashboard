import React from 'react'
import './piechart.scss'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];
const PieChartBox = () => {
  return (
    <div className='piechartbox'>
        <h1>Lead By Source</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height={300} >
            <PieChart >
                <Tooltip 
                contentStyle={{background : "pink",borderRadius : "5px"}}
                
                />
        <Pie
          data={data}
         
          innerRadius={"70%"}
          outerRadius={"90%"}
          
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        
      </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="options">
            {
                data.map((item,i)=>(
                    <div className="option" key={item.name}>
                       <div className="title">
                        <div className='dot'style={{backgroundColor : item.color}}/>
                        <span>{item.name}</span>
                       </div>
                       <span>{item.value}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PieChartBox