import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

export default function Pricerange() {
  const [price,setPriceRange] = useState(10500)
  return (
    <div className="session mt-5 font-semibold border-b-2  py-7  ">
      <p className="font-semibold text-lg">One Way Price</p>
       <div className='my-5'>
          <Slider value={price} onChange={(e)=>setPriceRange(e)}  step={100} style={{width:'100%'}} min={3220} max={10500}/>          
       </div>
       <p className='text-lg font-bold'>3,240 tk - {price.toLocaleString()} tk</p>
    </div>
  );
}
