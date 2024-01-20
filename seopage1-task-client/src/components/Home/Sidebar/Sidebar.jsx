/* eslint-disable no-unused-vars */
import Cheackbox from "./Cheackbox";
import DeparTureTime from "./DeparTureTime";
import Pricerange from "./Pricerange";

export default function Sidebar() {
  const airlines = [
    { airline: "Biman Bangladesh Airlines", price: 3243, currency: "BDT" },
    { airline: "US Bangla Airlines", price: 3954, currency: "BDT" },
    { airline: "Air Astra", price: 3954, currency: "BDT" },
    { airline: "Novo Air", price: 4139, currency: "BDT" },
  ];

  return (
    <>
      <div className="session mt-5 font-semibold border-b-2  py-10 text-cneter ">
        <p className=" text-center">Session Timeout in</p>
        <div className="flex items-center">
          <div className="timer text-2xl text-white flex gap-4 mx-auto   mt-4">
            <div className="minute h-10 w-12 flex items-center justify-center bg-golapi rounded-sm">
              19
            </div>
            <span className="text-4xl text-golapi">:</span>
            <div className="second h-10 w-12 flex items-center justify-center bg-golapi rounded-sm">
              45
            </div>
          </div>
        </div>
      </div>
      <Pricerange></Pricerange>
      <DeparTureTime></DeparTureTime>
      <div className="session mt-5 font-semibold border-b-2  py-5 text-cneter ">
        <h3 className="text-lg font-semibold">Stops From Dhaka</h3>
        <div className="flex items-center justify-between ">
        <Cheackbox label={'Non Stop (16)'} id={'stop'}/>
          <p htmlFor="stop" className="text-gray-500 mt-3 text-[16px]"> BDT 3,422 </p>
        </div>
      </div>      
      <div className="session mt-5 font-semibold border-b-2  py-5 text-cneter ">
        <h3 className="text-lg font-semibold">Check in Baggage Allowance</h3>
        <Cheackbox label={'20 KG (16)'} id={'weight'}/>
      </div>     
   
       <div className="session mt-5 font-semibold border-b-2 flex justify-between items-center  py-5 text-cneter ">
      <div>
        <h3 className="text-lg font-semibold">Departing from</h3>
        <Cheackbox label={'DAC'} id={'DAC'}/>
     </div>     
      <div>
        <h3 className="text-lg font-semibold">Arriving at</h3>
        <Cheackbox label={'CGP'} id={'CGP'}/>
     </div>
      </div>
      
      <div className="session mt-5 font-semibold border-b-2  py-6 text-cneter ">
        <h3 className="text-lg font-semibold">Airlines</h3>
         {airlines.map((ele,ind)=>{
          return (
            <div key={ind} className="flex items-center justify-between  mt-4">
           <Cheackbox mt={2}  label={ele.airline} id={ele.airline.replace(" ")}/>
          <p className="text-gray-500 text-[16px]">{ele.currency} {ele.price.toLocaleString()} </p>
        </div>
          )
         })}
      </div>

      <div className="session mt-5 font-semibold border-b-2  py-5 text-cneter ">
        <h3 className="text-lg font-semibold">Transit Time in (Dhaka - Chittagong)</h3>
        <Cheackbox label={'No Transit Time (19)'} id={'Transit'}/>
        <button className="btn font-bold capitalize mt-14 w-full outlinebtn2 text-lg">Clear Filter</button>
      </div>
    </>
  );
}
