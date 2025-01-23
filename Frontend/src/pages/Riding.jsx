import Map from "../assets/map-pic.gif";
import Car from "../assets/car.webp";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <div className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <Link to="/home"> 
          <i className="ri-home-gear-fill"></i>
        </Link>
      </div>
      <div className="h-1/2">
        <img className="h-full w-full object-cover" src={Map} alt="" />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img className="h-14" src={Car} alt="Car" />
          <div className="text-right">
            <h2 className="text-lg font-medium">Ammar</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">ABC 098 XYZ</h4>
            <p className="text-sm text-gray-600">White Suzuki Alto</p>
          </div>
        </div>

        <div className="flex gap-2  flex-col items-center justify-between ">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-4 border-b-2">
              <i className="ri-map-pin-line"></i>
              <div>
                <h3 className="text-lg font-medium">573/001-Z</h3>
                <p className="text-sm  text-gray-600">
                  Baldia Town, Karachi, Sindh
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-4 ">
              <i className="ri-money-dollar-circle-line"></i>
              <div>
                <h3 className="text-lg font-medium">RS: 499</h3>
                <p className="text-sm  text-gray-600">Cash Payment</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5  bg-green-500 rounded-lg text-white font-semibold p-2">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Riding;
