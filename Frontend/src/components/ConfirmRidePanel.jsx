import Car from "../assets/car.webp";

const ConfirmRidePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
      <div className="flex gap-2  flex-col items-center justify-between ">
        <img className="h-20" src={Car} alt="Car" />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-4 border-b-2">
          < i className="ri-map-pin-user-line"></i>
          <div>
              <h3 className="text-lg font-medium">573/001-Z</h3>
              <p className="text-sm  text-gray-600">
                Baldia Town, Karachi, Sindh
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-4 border-b-2">
          < i className="ri-map-pin-line"></i>
          <div>
              <h3 className="text-lg font-medium">573/001-Z</h3>
              <p className="text-sm  text-gray-600">
                Baldia Town, Karachi, Sindh
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-4 ">
          < i className="ri-money-dollar-circle-line"></i>
          <div>
              <h3 className="text-lg font-medium">573/001-Z</h3>
              <p className="text-sm  text-gray-600">
                Baldia Town, Karachi, Sindh
              </p>
            </div>
          </div>
        </div>

        <button className="w-full mt-5 bg-green-500 rounded-lg text-white font-semibold p-2">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRidePanel;
