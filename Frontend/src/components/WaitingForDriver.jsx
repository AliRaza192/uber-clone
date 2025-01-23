import Car from "../assets/car.webp";

const WaitingForDriver = (props) => {
  return (
    <div>
      <div>
        <h5
          className="p-1 text-center w-[93%] absolute top-0"
          onClick={() => {
            props.waitingForDriver(false);
          }}
        >
          <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
        </h5>

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
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
