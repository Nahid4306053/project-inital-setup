/* eslint-disable no-unused-vars */

import { useLocation } from "react-router-dom";
import payment from "/images/payment.webp";
import "../styles/footer.scss";

import logo from "/images/color-logo.png";
import Companies from "./footer/companies";
import Sociallinks from "./footer/sociallinks";
export default function Footer() {
  const { pathname } = useLocation();
  const paths = ["/login", "/signup", "/dashborder"];
  return (
    <>
      <footer className="bg-[#e9dfdf00] text-slate-500">
        <div className="container mx-auto">
          <div className="grid  border-b mb-5 border-gray-300 pb-10    gap-8 mx-auto grid-cols-12">
            <div className="about_info xl:col-span-3 col-span-full md:col-span-5 mt-7">
              <img className={`h-14 opacity-75 `} src={logo} alt="" />
              <br />
              <div className="info   gap-4 items-center">
                <div className="location">
                  <p className="text-md text-red-500 font-thin">
                    Flight Expert Dhaka (Main branch) <br /> 90/1 Motijheel City
                    Centre Level 25- <br /> B-1, Lift 26 Dhaka 1000, Bangladesh
                  </p>
                </div>
                <Sociallinks></Sociallinks>
              </div>
            </div>
            <div className="links xl:col-span-2  col-span-full md:col-span-4 mt-7">
              <h1 className="shops mt-4 text-xl font-bold text-gray-500 ">
                About
              </h1>
              <ul className="mt-6 w-auto ">
                <li className="leading-9 hover:text-red-600   cursor-pointer">
                  About Flight Expert
                </li>
                <li className="leading-9 hover:text-red-600   cursor-pointer">
                  Best Price Guarantee
                </li>
                <li className="leading-9 hover:text-red-600   cursor-pointer">
                  Terms and Conditions
                </li>
                <li className="leading-9 hover:text-red-600   cursor-pointer">
                  Privacy Policy
                </li>
                <li className="leading-9 hover:text-red-600   cursor-pointer">
                  Cookie Policy
                </li>
                <li className="leading-9 hover:text-red-600   cursor-pointer">
                  Blog
                </li>
              </ul>
            </div>
            <div className="links xl:col-span-2 col-span-full md:col-span-3 mt-7">
              <h1 className="shops mt-4 text-xl font-bold text-gray-500 ">
                Help
              </h1>
              <ul className="mt-6 w-auto ">
                <li className="leading-9 hover:text-red-600   cursor-pointer">
                  FAQS
                </li>
                <li className="leading-9 hover:text-red-600   cursor-pointer">
                  Easy EMI
                </li>
                <li className="leading-9 hover:text-red-600   cursor-pointer">
                  Payment Methods
                </li>
                <li className="leading-9 hover:text-red-600   cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>
            <div className="links xl:col-span-2 col-span-full md:col-span-4 mt-7">
              <h1 className="shops mt-4 text-xl font-bold text-gray-500 ">
                Have Questions?
              </h1>
              <div className="mt-6 w-auto ">
                <h3 className="shops mt-4 text-xl  text-red-600 ">
                  +88-09617-111-888
                </h3>
                <h3 className="shops mt-2 text-xl  text-red-600 ">
                  sales@flightexpert.com
                </h3>
                <div className="suport mt-4">
                  <h5 className="text-sm text-neutral  font-bold">
                    Dedicated Customer Support
                  </h5>
                  <p className="text-xs mt-2 text-neutral font-semibold">
                    Sat-Thurs: 9AM-9PM <br /> Friday/Govt. Holidays: 10AM-6PM
                  </p>
                </div>
              </div>
            </div>
            <div className="links xl:col-span-3 col-span-full md:col-span-6  mt-7">
              <h1 className="shops mt-4 text-xl font-bold text-gray-500 ">
              Accepted Payments
              </h1>
              <div className="mt-6 w-auto ">
                <img src={payment} alt="" />
              </div>
            </div>
          </div>
          <Companies></Companies>
        </div>

        <div className={`coppwright`}>
          <div className="container text-center py-6 pb-14 mx-auto mt-7 flex-col gap-5 lg:flex-row  justify-between items-center">
            <span className="text-lg text-slate-500 font-bold">
            Copyright
              © {new Date().getFullYear()}
              <a href="#" className=" hover:underline ">
                 {" Md Nahid Hasan™ "}
              </a>
               All rights reserved by Flight Expert
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
