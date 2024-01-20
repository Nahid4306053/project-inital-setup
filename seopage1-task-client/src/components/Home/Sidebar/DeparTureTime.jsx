export default function DeparTureTime() {
  const depertureTime = [
    { period: "Morning", time: "06.00 - 11.56" ,icon:"fa-light fa-sun-haze"},
    { period: "Afternoon", time: "06.00 - 11.56" ,icon:"fa-light fa-sun-bright"},
    { period: "Evening", time: "06.00 - 11.56" ,icon:"fa-solid fa-sun-bright"},
  ];
  return (
  <div className="departure py-10 shadow-lg">
  <p className="font-semibold text-lg">Departure time in Dhaka</p>
  <div className="flex mt-7 flex-wrap gap-8 w-full">
   {depertureTime.map((ele,ind)=>{
     return (
       <div key={ind} className="border p-5 justify-center rounded-lg border-slate-800 items-center">
         <div className="info text-center md:px-6 cursor-pointer">
             <i className={`${ele.icon} text-xl`}></i>
             <p className="font-bold">{ele.period}</p>
             <p className="text-xs">{ele.time}</p>
         </div>
       </div>
     )
   })}
  </div>
  </div>                  
  
  );
}
