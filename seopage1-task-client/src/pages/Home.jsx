/* eslint-disable no-unused-vars */
// import React from "react";
// import { Link } from "react-router-dom";


import ContentPart from "../components/Home/ContentPart/ContentPart";
import FilterSection from "../components/Home/FilterSection";

import Sidebar from "../components/Home/Sidebar/Sidebar";
export default function Home() {


  return (
    <>
      <FilterSection></FilterSection>
      <div className="main_part container mb-20 mx-auto">
       <div className="grid grid-cols-12 lg:space-y-0 space-y-10 lg:gap-8">
        <div className="Sidebar lg:col-span-4 xl:mr-7 col-span-12">
          <Sidebar></Sidebar>
        </div>        
        <div className="Content_part lg:col-span-8 col-span-12">
          <ContentPart></ContentPart>
        </div> 
       </div>
      </div>
    </>
  );
}
