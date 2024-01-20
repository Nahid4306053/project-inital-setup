import { useEffect, useState } from "react";

export default function AirlineSerchData() {
  const [datas, setDatas] = useState([]);
  useEffect(()=>{
   fetch('./data/AirlineSearchData.json').then(data=>data.json()).then(res=>setDatas(res)).catch((err)=>console.log(err))
  },[])
  
  return (
    <div className="p-0 shadow-lg left-0  dropdown-content mt-2 z-[1] bg-base-100 rounded-lg shadow-[#00000068] w-80">
    <div className="search bar text-golapi p-3 border-b gap-2  flex items-center border-slate-300 w-full">
    <i className="fa-solid fa-magnifying-glass"></i>             
      <input type="text"  placeholder="Type for the airpotname or airpot code" className="w-full focus:outline-none placeholder:text-sm placeholder:text-slate-400" />
    </div>
    <div className="airpots custom-scrollbar max-h-80 overflow-auto">
     {datas.length > 0 && datas.map((ele,ind)=>{
         return (
          <div key={ind} className="flex p-2 px-3 justify-between items-center hover:bg-slate-200">
          <div className="location flex gap-1 items-center">
           <i className="fa-solid text-golapi fa-plane-engines"></i>
           <div className="name_location">
            <h3 className="text-sm font-bold">{ele.location}</h3>
            <p className="text-xs">{ele.airport}</p>
           </div>
          </div>
          <div className="code">{ele.code}</div>
          </div>
         )           
     })}
    </div>
    </div>
  );
}
