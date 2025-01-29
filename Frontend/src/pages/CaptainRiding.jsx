import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Map from "../assets/map-pic.gif";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen relative">
      <div className="fixed p-6 top-0 flex items-center justify-between w-full">
        <img className="w-16" src={logo} alt="Logo" />
        <Link
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
          to="/captain-home"
        >
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img className="h-full w-full object-cover" src={Map} alt="" />
      </div>
      <div
        className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-300 pt-10"
        onClick={() => setFinishRidePanel(true)}
      >
        <h5
          className="p-1 text-center w-[90%] absolute top-0"
          onClick={() => {}}
        >
          <i className="text-3xl text-gray-900 ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM Away</h4>
        <button className="bg-green-500 rounded-lg text-white font-semibold p-3 px-10">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full bg-white px-3 py-6 -translate-x-full  z-10 bottom-0 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
