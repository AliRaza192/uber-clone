import { useRef, useState } from "react";
import logo from "../assets/logo.png";
import map1 from "../assets/map1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
const Home = () => {
  const [pick, setPick] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

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
  return (
    <div className="h-screen relative">
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
          <LocationSearchPanel />
        </div>
      </div>
    </div>
  );
};

export default Home;
