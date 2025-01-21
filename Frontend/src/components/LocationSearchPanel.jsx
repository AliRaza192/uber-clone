const LocationSearchPanel = (props) => {
  console.log(props.setVehiclePanel);
  
  // sample data arry
  const locations = [
    "Hub River Rd, Delhi Makkah Colony, Karachi, Karachi City, Sindh",
    "Delhi Makkah Colony, Hub River Rd, Karachi,  Karachi City, Sindh",
    "Musharaf Colony, Hub River Rd, Karachi,  Karachi City, Sindh",
    "Nava  Colony, Hub River Rd, Karachi,  Karachi City, Sindh",
  ];

  return (
    // this sample data
<div>
  {locations.map(function (elem, index) {
      return (
        <div onClick={() => {
          props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }} key={index} className="flex p-3 border-2 border-gray-100 active:border-black rounded-xl gap-4 items-center my-2 justify-start">
          <h2 className="bg-[#eee] flex h-8 w-12 items-center justify-center rounded-full">
            <i className="ri-map-pin-line"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      );
    })}
</div>
  );
};

export default LocationSearchPanel;
