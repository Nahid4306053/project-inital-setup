
import { useEffect } from "react";

import "aos/dist/aos.css";

import Lottie from "lottie-react";
import { Outlet, useNavigation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import big_loading from "../assets/big_loading.json";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import "../styles/App.scss";

export default function MainLayouts() {
 
  const navigation = useNavigation();
  


  useEffect;

  return (
    <div className="overflow-x-hidden min-h-screen  flex flex-col justify-between">
      <Navber />

      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      {navigation.state === "loading" ? (
        <div className=" flex justify-center min-h-screen items-center  w-full">
         
          <Lottie
            className="md:h-[500px] h-[300px]"
            animationData={big_loading}
          ></Lottie>
        </div>
      ) : (
        <div><Outlet></Outlet></div>
      )}
  
      
      <Footer />
    </div>
  );
}
