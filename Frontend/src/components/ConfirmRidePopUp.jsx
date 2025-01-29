import { useState } from "react";
import Driver from "../assets/driver.webp";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [opt, setOtp] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setRidePopupPanel(false);
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
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              type="text"
              placeholder="Enter OTP"
              value={opt}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              className="bg-[#eee] px-6 py-4 text-lg rounded-lg w-full mt-3"
            />
            <Link
              to="/captain-riding"
              onClick={() => {
                props.setConfirmRidePopUp(true);
              }}
              className="w-full mt-5 flex justify-center text-lg bg-green-600 rounded-lg text-white font-semibold p-3"
            >
              Confirm
            </Link>

            <button
              onClick={() => {
                props.setConfirmRidePopUp(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full mt-2 text-lg bg-red-600 rounded-lg text-white font-semibold p-3"
            >
              Cancle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
