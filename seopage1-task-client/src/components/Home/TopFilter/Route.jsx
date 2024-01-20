import { useState } from "react";
import AirlineSerchData from "./AirlineSerchData";

export default function Route() {
  const [tab,setab] = useState(0);
  return (
    <>    
    <i className="fa-solid absolute h-10 z-[999]  rounded-full flex justify-center items-center shadow-lg border border-slate-300 text-golapi right-[calc(50%-20px)] top-[calc(50%-20px)]  w-10 bg-white fa-right-left"></i>
      <div onMouseEnter={()=>setab(1)} onMouseLeave={()=>setab(0)}  className={`route-card dropdown-hover ${tab === 1 && "bg-slate-200 "}  cursor-pointer rounded-lg dropdown  p-2 border border-slate-300`}>
        <p className="">From</p>
        <h2 className="text-xl font-bold">Dhaka</h2>
        <p className="text-xs">Hazrat Shahajalal International Airpot</p>
        <AirlineSerchData></AirlineSerchData>
      </div>
      <div onMouseEnter={()=>setab(2)} onMouseLeave={()=>setab(0)} className={`route-card dropdown-hover cursor-pointer rounded-lg dropdown  pl-7  p-2 border border-slate-300 ${tab === 2 && "bg-slate-200"}`}>
        <p className="">To</p>
        <h2 className="text-xl font-bold">Chittagong</h2>
        <p className="text-xs">Shah Amanat International</p>
        <AirlineSerchData></AirlineSerchData>
      </div>
 
    </>
  );
}
