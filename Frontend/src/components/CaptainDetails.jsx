import Main from "../assets/main.avif";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={Main}
            alt="Captain"
          />
          <h4 className="text-lg font-medium">Salman </h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">RS: 499</h4>
          <p className="text-sm text-gray-600 font-medium">Earned</p>
        </div>
      </div>
      <div className="flex p-4 mt-8 bg-gray-200 rounded-lg gap-5 items-start justify-center ">
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-time-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
