import Car from "../assets/car.webp";
import Bike from "../assets/bike.webp";
import Auto from "../assets/auto.webp";

const VehiclePanel = (props) => {
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
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full items-center mb-2 justify-between border-2 active:border-black p-3 rounded-xl "
      >
        <img className="h-12" src={Car} alt="Car" />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              {" "}
              <i className="ri-user-3-fill"></i> 4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affortable, compact riders
          </p>
        </div>
        <h2 className="text-lg font-semibold">Rs:349</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full items-center mb-2 justify-between border-2 active:border-black p-3 rounded-xl "
      >
        <img className="h-12" src={Bike} alt="Car" />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Bike{" "}
            <span>
              {" "}
              <i className="ri-user-3-fill"></i> 2
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affortable, bike riders
          </p>
        </div>
        <h2 className="text-lg font-semibold">Rs:149</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full items-center mb-2 justify-between border-2 active:border-black p-3 rounded-xl "
      >
        <img className="h-12" src={Auto} alt="Car" />
        <div className=" ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affortable, auto riders
          </p>
        </div>
        <h2 className="text-lg font-semibold">Rs:249</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
