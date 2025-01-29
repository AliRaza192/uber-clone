import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Map from "../assets/map-pic.gif";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false);
  const ridePopupPanelRef = useRef(null);
  const confirmRidePopUpRef = useRef(null);

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopUp) {
        gsap.to(confirmRidePopUpRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopUpRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopUp]
  );

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-full">
        <img className="w-16" src={logo} alt="Logo" />
        <Link
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
          to="/captain-home"
        >
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img className="h-full w-full object-cover" src={Map} alt="" />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full bg-white px-3 py-6 -translate-x-full  z-10 bottom-0 pt-12"
      >
        <RidePopUp
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopUp={setConfirmRidePopUp}
        />
      </div>

      <div
        ref={confirmRidePopUpRef}
        className="fixed w-full h-screen bg-white px-3 py-6 -translate-x-full  z-10 bottom-0 pt-12"
      >
        <ConfirmRidePopUp
          setConfirmRidePopUp={setConfirmRidePopUp}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
