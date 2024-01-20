import { useState } from "react";
import Route from "./TopFilter/Route";
import DateRange from "./TopFilter/DateRange";
import Pasenger from "./TopFilter/Pasenger";

export default function FilterSection() {
  const triptype = ["One Way", "Round Trip", "Multi City"];
  const faretype = ["Regular Fares", "Seaman Fares"];
  const [Faretype,setFaretype] = useState(1)
  const [radiobtn, setRadio] = useState(1);
  return (
    <div className="container mx-auto mb-20">
      <div className="bg-white shadow-lg pb-10 relative p-5 border border-slate-200">
        <div className="ratio  flex flex-wrap gap-7 text-slate-500 font-semibold">
          {triptype.map((ele, ind) => {
            return (
              <div key={ind + 1} className="lists flex text-xs md:text-base gap-2 items-center">
                <div
                  onClick={() => setRadio(ind + 1)}
                  className={`md:h-[18px] md:w-[18px] w-[12px] h-[12px] cursor-pointer rounded-full ${
                    radiobtn === ind + 1 ? "md:border-[5px] border-[4px]  border-[#EB1933]" : "border border-slate-400"
                  }`}
                ></div>
                {ele}
              </div>
            );
          })}
        </div>
        <div className="flex lg:flex-row flex-col gap-4 mt-5">
 
          <div className="route lg:w-[50%] w-full cursor-pointer text-gray-500 relative grid grid-cols-2 gap-1">
            <Route></Route>
          </div>
          <div className="date flex gap-4  flex-wrap lg:w-[70%] w-full">
           <DateRange></DateRange>  
           <Pasenger></Pasenger>  
          </div>
        </div>
        <div className="FareType flex gap-5 text-xs md:text-base my-4 w-full">
          <p className="font-bold whitespace-nowrap">Fare Type:</p>
          <div className="w-full flex gap-5">
          {faretype.map((ele, ind) => {
            return (
              <div key={ind + 1} className="lists flex text-m gap-2 items-center">
                <div onClick={() => setFaretype(ind + 1)}
                     className={`md:h-[14px] md:w-[14px] w-[10px] h-[10px] items-center flex cursor-pointer rounded-full ${
                    Faretype === ind + 1 ? "" : "border border-slate-400"
                  }`}
                >
                <i className={`fa-sharp fa-solid fa-circle-check text-golapi md:text-sm text-xs ${
                    Faretype === ind + 1 ? "block" : "hidden"
                  }`}></i>  
                </div>
                {ele}
              </div>
            );
          })}
          </div>
        </div>
        <button className="btn bg-golapi border-none capitalize z-[0] text-white text-lg absolute right-[calc(50%-80px)] top-[calc(100%-24px)] px-5">Modify Search</button>
      </div>
    </div>
  );
}
