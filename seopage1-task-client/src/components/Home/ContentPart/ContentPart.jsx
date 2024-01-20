import Airlines from "./Airlines";



export default function ContentPart() {
  return (
                    <>
    <div className="destination flex text-xl md:text-4xl items-center justify-between">
      <div className="prev"><i className="text-golapi fa-solid fa-caret-left"></i> </div>        
      <div className="destinetion font-bold text-center">Flights from Dhaka to Chittagong</div>      
      <div className="next"> <i className="text-golapi fa-solid fa-caret-right"></i></div>              
    </div>
    <div className="price_type p-5 py-3  flex justify-between mt-8  cursor-pointer shadow-lg">
     <div className="cheapest flex-1 md:space-y-1 py-2">
      <h3 className="md:text-xl text-slate-600 font-semibold">Cheapest</h3>
      <p className="text-slate-400 md:text-base text-xs">To get Cheapest available flights</p>
     </div>
     <div  className="w-[1px] bg-slate-300 mx-7 " ></div>
     <div className="shortest flex-1 md:space-y-1 py-4">
     <h3 className="md:text-xl text-slate-600 font-semibold">Shortest</h3>
      <p className="text-slate-400 md:text-base text-xs">To get Shortest available flights</p>
     </div>
    </div>
    <Airlines></Airlines>
    </>
  )
}
