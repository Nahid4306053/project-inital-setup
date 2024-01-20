/* eslint-disable no-unused-vars */

import moment from "moment";
import { useState } from "react";
import { Calendar } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function StartDate() {
  const [date,setDate] = useState(new Date())
  const [calenderOpen, setCalander] = useState(false);
  return (
    <div onMouseEnter={()=>setCalander(true)} onMouseLeave={()=>setCalander(false)}  className={`start relative border-r border-slate-300 cursor-pointer flex-1 p-2 px-4 ${calenderOpen && 'bg-slate-200'}`}>
       <p className="flex items-center">Departure <i className="fa-solid ml-2 fa-angle-down"></i></p>
        <h2 className="text-xl font-bold">{new Date(date).getDate()} 
        <span className="text-base ml-2">{moment(date).format("MMM YY")}</span></h2>
        <p className="text-xs">{moment(date).format('dddd')}</p>               
      <div className={`absolute z-[5] shadow-lg ${calenderOpen ? "block" : "hidden"} shadow-[#0000009a] left-0 `}>             
      <Calendar
        color={'#EB1933'}
        date={date}
        onChange={(date)=>setDate(date)}
      />
      </div>
    </div>
  );
}
