import Driver from "../assets/driver.webp";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm to ride and Start!
      </h3>

      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 object-cover rounded-full bg-white"
            src={Driver}
            alt="Driver"
          />
          <h2 className="text-lg font-medium"> M Suleman </h2>
        </div>
        <h5 className="text-lg font-semibold">2.6 KM</h5>
      </div>

      <div className="flex gap-2  flex-col items-center justify-between ">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-4 border-b-2">
            <i className="ri-map-pin-user-line"></i>
            <div>
              <h3 className="text-lg font-medium">573/001-Z</h3>
              <p className="text-sm  text-gray-600">
                Baldia Town, Karachi, Sindh
              </p>
            </div>
          </div>
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
              <h3 className="text-lg font-medium">573/001-Z</h3>
              <p className="text-sm  text-gray-600">
                Baldia Town, Karachi, Sindh
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full">
          <Link
            to="/captain-home"
            className="w-full mt-5 text-lg flex justify-center bg-green-600 rounded-lg text-white font-semibold p-3"
          >
            Finish Ride
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
