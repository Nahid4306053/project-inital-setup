import ReturnDate from "./ReturnDate";
import StartDate from "./startDate";

export default function DateRange() {
  return (
    <>
      <div className="route-card h-full relative lg:w-[60%] md:w-1/2 w-full text-gray-500 flex  rounded-lg   border border-slate-300">
         <StartDate></StartDate> 
         <ReturnDate></ReturnDate>      
      </div>
    </>
  );
}
