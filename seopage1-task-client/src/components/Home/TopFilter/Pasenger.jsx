/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function Pasenger() {
  const [clasType,setclassType] = useState('Economy');  
  const [Traveler,setTraveler] = useState({Adults:1,Children:0,Kids:0,Infant:0});
  const [tab,setab] = useState(false);                
  const bokingclass = ['Economy','Premium Economy','Business','First Class'];
  const travelelerType = 
  [{type:"Children",year:"5 years - Under 12 years"},
  {type:"Kids",year:"2 years - Under 5 years"},
  {type:"Infant",year:"Bellow 2 Years"},]   

  return (
    <div  onMouseEnter={()=>setab(true)} onMouseLeave={()=>setab(false)} className={`route-card dropdown-hover cursor-pointer rounded-lg dropdown  w-full text-gray-500 flex-1 p-2 border border-slate-300 ${tab && "bg-slate-200"}`}>
      <div >
      <p >Travel & Booking Class</p>
      <h2 className="text-xl font-bold">{Object.values(Traveler).reduce((p,c)=>p+c,0)} Traveler</h2>
      <p className="text-xs">{clasType}</p>
      </div>
       <div  className="p-4 shadow-lg left-0  dropdown-content mt-2 z-[1] bg-base-100 rounded-lg shadow-[#00000068] w-80">
        <p className="text-sm text-golapi font-bold">Travelers</p>
        <div className="traveler-type space-y-4 mt-2">
          <div className="default flex justify-between"> 
            <div className="traveller_age">
              <h2 className="text-slate-400 font-semibold">Adults</h2>
              <p className="text-xs">12 Years and Above</p>
            </div>
            <div className="controll flex text-golapi items-center gap-4">        
              <button disabled={Traveler.Adults > 1 ? false : true} onClick={()=>setTraveler(old=>({ ...old,Adults: old.Adults - 1}))}><i className="fa-solid fa-minus"></i></button>
                <p className="text-slate-600">{Traveler.Adults}</p>
              <button onClick={()=>setTraveler(old=>({ ...old,Adults: old.Adults + 1}))}><i className="fa-solid fa-plus"></i></button>
            </div>
          </div>
          { travelelerType.map((ele,ind)=>{
            return  (<div key={ind} className="default flex space-y-3 justify-between"> 
            <div className="traveller_age">
              <h2 className="text-slate-400">{[ele.type]}</h2>
              <p className="text-xs">{ele.year}</p>
            </div>
            <div className="controll flex text-golapi items-center gap-4">        
              <button disabled={Traveler[ele.type] > 0 ? false : true} onClick={()=>setTraveler(old=>({ ...old,[ele.type]: old[ele.type] - 1}))}><i className="fa-solid fa-minus"></i></button>
                <p className="text-slate-600">{Traveler[ele.type]}</p>
              <button onClick={()=>setTraveler(old=>({ ...old,[ele.type]: old[ele.type] + 1}))}><i className="fa-solid fa-plus"></i></button>
            </div>
          </div>)
          })

          }
        </div>
        <hr className="border border-slate-200 my-4" />
        <p className="text-sm text-golapi font-bold">Booking Class</p>
        <div className="ratio flex flex-wrap gap-4 mt-4 text-slate-500 font-semibold">
          {bokingclass.map((ele, ind) => {
            return (
              <div key={ind} className="lists flex text-sm -mt-2 gap-1 items-center">
                <p
                  onClick={() => setclassType(ele)}
                  className={`h-[14px] w-[14px] cursor-pointer rounded-full  ${
                    clasType ===ele ? "border-[4px] border-[#EB1933]" : "border border-slate-400"
                  }`}
                ></p>
                {ele}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
