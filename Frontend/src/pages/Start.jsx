import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
// import light from "../assets/light.avif";
const Start = () => {
  return (
    <div>
      <div className="h-screen bg-cover bg-center pt-8 flex flex-col justify-between w-full bg-red-400 bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
        <img className="w-16 ml-8" src={logo} alt="logo" />
        <div className="bg-white py-5 px-5 pb-7">
          <h2 className="text-3xl font-bold">Get Start with Uber</h2>
          <Link to="/login" className=" flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
