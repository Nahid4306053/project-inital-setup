/* eslint-disable no-unused-vars */

import moment from "moment";
import { useState } from "react";
import { Calendar } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function ReturnDate() {
  const [date,setDate] = useState(new Date().setDate(new Date().getDate() + 1))
  const [calenderOpen, setCalander] = useState(false);
  return (
    <div onMouseEnter={()=>setCalander(true)} onMouseLeave={()=>setCalander(false)}  className={`start relative cursor-pointer flex-1 p-2 px-4 ${calenderOpen && 'bg-slate-200'}`}>
       <p className="flex  items-center">Return <i className="fa-solid ml-2 fa-angle-down"></i></p>
        <h2 className="text-xl font-bold">{new Date(date).getDate()} 
        <span className="text-base ml-2">{moment(date).format("MMM YY")}</span></h2>
        <p className="text-xs">{moment(date).format('dddd')}</p>               
      <div className={`absolute shadow-lg z-[5] ${calenderOpen ? "block" : "hidden"} shadow-[#0000009a] left-0 `}>             
      <Calendar
        color={'#EB1933'}
        date={date}
        onChange={(date)=>setDate(date)}
      />
      </div>
    </div>
  );
}
