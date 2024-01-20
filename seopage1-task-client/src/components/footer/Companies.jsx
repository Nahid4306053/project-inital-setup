export default function Companies() {
  return (
    <div className="border-b mb-5 comapanies text-slate-500 font-bold border-gray-300 md:py-10 pt-5 flex justify-evenly flex-wrap">
      <div className="item md:mb-0 mb-10">
        <h4 className="title text-center text-lg  mb-5">Accredited Member</h4>
        <div className="member flex">
          <div>
            {" "}
            <img
              src="https://i.ibb.co/KL3Kp0R/basis.webp"
              className="object-cover mx-auto "
              alt=""
            />{" "}
          </div>
          <div>
            {" "}
            <img
              src="https://i.ibb.co/4pX7Ng9/e-cab.webp"
              className="object-cover mx-auto "
              alt=""
            />{" "}
          </div>{" "}
        </div>
      </div>
      <div className="item md:mb-0 mb-10">
        <h4 className="title text-center text-lg  mb-5">Registered at</h4>
        <div className="member flex">
          <img
            src="https://i.ibb.co/PZKv5c3/duns.webp"
            className="object-cover mx-auto "
            alt=""
          />
        </div>
      </div>
      <div className="item md:mb-0 mb-10">
        <h4 className="title text-center text-lg  mb-5">Authorised by</h4>

        <img
          src="https://i.ibb.co/6wf2HLB/iata.webp"
          className="object-cover mx-auto "
          alt="ita"
        />
      </div>
      <div className="item md:mb-0 mb-10">
        <h4 className="title text-center text-lg  mb-5">Our Partners</h4>
        <div className="member flex">
          <img
            src="https://i.ibb.co/TrDZGv7/google-logo.png"
            className=" w-full object-cover mx-auto "
            alt="ita"
          />
        </div>
      </div>
    </div>
  );
}
