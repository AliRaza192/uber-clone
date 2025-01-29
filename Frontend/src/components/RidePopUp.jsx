import Driver from "../assets/driver.webp";

const RidePopUp = (props) => {
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
        New Ride Available for you!
      </h3>

      <div className="flex items-center justify-between p-3 bg-yellow-500 rounded-lg mt-4">
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
        <div className="flex mt-5 w-full items-center justify-between ">
          <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className="mt-1 bg-gray-400 rounded-lg text-gray-900 font-semibold p-3 px-10"
          >
            Reject
          </button>

          <button
            onClick={() => {
              props.setConfirmRidePopUp(true);
            }}
            className="mt-1 bg-green-600 rounded-lg text-white font-semibold p-3 px-10"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
