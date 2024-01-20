
import { Link } from "react-router-dom";


import "../Styles/Navbar.scss";

import logo from "/images/logo.png";
export default function Navber() {


  const links = (
    <>
     
    </>
  );

  return (
    <header
      className={`"bg-red-400  mb-5 bg-white
         w-full z-[100]`}
    >
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col container mx-auto">
          {/* Navbar */}
          <div className="w-full   flex  justify-between px-0   mx-auto navbar ">
            <div className="flex-1 capitalize text-2xl font-bold">
              <Link to="/">
                <img
                  className={`lg:h-16 py-2     h-16`}
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
            <div className="auth flex-1 flex justify-end">
               <button className="btn bg-golapi border-none capitalize text-white px-5">sign in</button>
            </div>
            <div className="flex-none hidden lg:block ">
              <ul className="menu menu-horizontal  font-Nunito mr-5 font-semibold text-lg">
                {links}
              </ul>
            </div>

           
          </div>
        </div>
        <div className="drawer-side lg:hidden">
          <label htmlFor="my-drawer-3" className="drawer-overlay "></label>
          <ul className="menu text-xl bg-red-200 relative font-bold text-center   p-4 w-80 min-h-full ">
            <div className="close z-50 absolute right-0 pr-5">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3">
                  <i className="fa-solid text-white fa-xmark"></i>
                </label>
              </div>
            </div>
            <label htmlFor="my-drawer-3">
                {links}  
            </label>
           
          </ul>
        </div>
      </div>
    </header>
  );
}
