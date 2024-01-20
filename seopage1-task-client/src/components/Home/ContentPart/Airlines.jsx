import moment from "moment";
import { useEffect, useState } from "react";
import img from '/images/non-stop-shape.webp'
import Pagenation from "../../shared/Pagenation";
export default function Airlines() {
  const [page,setpage] = useState(1);
  const [Airlines, setAirlines] = useState([]);
  useEffect(() => {
    fetch("./data/airlines.json")
      .then((data) => data.json())
      .then((res) => setAirlines(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[page])
  return (
  <div className="mt-5 space-y-2">
  {Airlines.length > 0 && Airlines.slice((page - 1)*10,page * 10).map((ele,ind)=>{
     return  (
     <div key={ind} className="flex flex-wrap gap-1  space-y-6  shadow-lg  justify-between p-2 min-h-[220px] py-5 ">
      <div className="airline_name lg:w-auto md:w-1/4 w-1/3  ">
        <img className="max-w-[80px] object-cover" src={ele.logo} alt="" />   
        <p className="name text-xs mt-2 text-slate-400">{ele.airline}</p>         
        <p className="name text-xs  font-bold text-green-700">{ele.isRefundable && "Partially Refundable"}</p>         
      </div>
      <div className="depart lg:w-auto md:w-1/4 w-1/3 space-y-3"> 
       <p className="text-xs text-slate-400">Depart</p>
       <div className="time text-slate-700">
         <h3 className="text-xl font-semibold">{ele.departure.time}</h3>
         <p className="text-xs font-bold">{moment(ele.departure.date).format("ddd, ll")}</p>
       </div>
       <p className="text-sm">{ele.departure.location}</p>
      </div>
      <div className="duration  lg:w-auto md:w-1/4 w-1/3  space-y-3 text-center">
      <p className="text-xs text-slate-400">{ele.departure.duration.hours > 0 && ele.departure.duration.hours +" hours "} {ele.departure.duration.minutes} minutes</p> 
      <div className="arive-path w-full py-2">
        <img className="mx-auto" src={img} alt="" />            
      </div>
      <p className="text-xs ">{ele.departure.shape}</p>
      </div>
      <div className="arive xl:w-auto lg:w-1/4 md:w-1/4 w-1/3 md:ml-4 space-y-3">
      <p className="text-xs text-slate-400">Arrive</p>
       <div className="time text-slate-700">
         <h3 className="text-xl font-semibold">{ele.arrival.time}</h3>
         <p className="text-xs font-bold">{moment(ele.arrival.date).format("ddd, ll")}</p>
       </div>
       <p className="text-sm">{ele.arrival.location}</p>           
      </div>
      <div className="price xl:w-auto lg:w-1/6 md:w-1/4 w-1/3 space-y-3 xl:text-center">
      <p className="text-xs text-slate-400">Price</p> 
      <p className="text-lg font-semibold text-slate-700">BDT {ele.price.toLocaleString()}</p>
      </div>
      <div className="details xl:w-auto lg:w-1/6 md:w-1/4 w-1/3 flex flex-col justify-between md:items-end items-start">
         <button className="btn font-bold capitalize outlinebtn">Book Now</button>
         <h4 className="text-lg font-semibold text-golapi flex hover:text-red-700 cursor-pointer items-center whitespace-nowrap gap-2 mt-5">Flight Details <i className="fa-solid fa-angle-down text-xl"></i></h4>
      </div>

     </div> 
     )              
  })}  
  <br />                 
  <br />                 
 {Airlines.length > 0 && <Pagenation page={page} setpage={setpage}
  totalData={Airlines.length} ></Pagenation>}
  </div>)
}
