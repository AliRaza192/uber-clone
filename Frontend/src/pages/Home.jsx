import { useRef, useState } from "react";
import logo from "../assets/logo.png";
import map1 from "../assets/map1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRidePanel from "../components/ConfirmRidePanel";
import LookingForDriver from "../components/LookingForDriver";
const Home = () => {
  const [pick, setPick] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);

  const submitHanlder = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );


  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-16 absolute left-5 top-5" src={logo} alt="logo" />
      <div className="h-screen w-screen">
        {/* uber map images */}
        <img className="h-full w-full object-cover" src={map1} alt="" />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="bg-white p-6 h-[30%] relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute top-6 right-6 text-2xl opacity-0"
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHanlder(e);
            }}
          >
            <div className="absolute line h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-lg"></div>
            <input
              value={pick}
              onChange={(e) => setPick(e.target.value)}
              onClick={() => setPanelOpen(true)}
              type="text"
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              placeholder="Add a pick-up location "
            />
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
              type="text"
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full bg-white px-3 py-10 -translate-x-full z-10 bottom-0 pt-12"
      >
        <VehiclePanel 
          setVehiclePanel={setVehiclePanel}
          setConfirmRidePanel={setConfirmRidePanel} />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed w-full bg-white px-3 py-6 -translate-x-full z-10 bottom-0 pt-12"
      >
        <ConfirmRidePanel/>
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed w-full bg-white px-3 py-6 -translate-x-full z-10 bottom-0 pt-12"
      >
        <LookingForDriver/>
      </div>
    </div>
  );
};

export default Home;
