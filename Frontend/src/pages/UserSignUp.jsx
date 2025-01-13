import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

const UserSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    // console.log(userData);

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img className="w-16 mb-10" src={logo} alt="logo" />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h4 className="text-lg font-medium mb-2">What is your name</h4>
          <div className="flex gap-4 ">
            <input
              type="text"
              required
              placeholder="FirstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="bg-[#eeeeee] py-2 px-4 border rounded mb-6 w-1/2 text-lg placeholder:text-base"
            />
            <input
              type="text"
              required
              placeholder="LastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="bg-[#eeeeee] py-2 px-4 border rounded mb-6 w-1/2 text-lg placeholder:text-base"
            />
          </div>

          <h4 className="text-lg font-medium mb-2">What is your email</h4>
          <input
            type="emai"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email@example.com"
            className="bg-[#eeeeee] py-2 px-4 border rounded mb-7 w-full text-lg placeholder:text-base"
          />

          <h4 className="text-lg font-medium mb-2">Enter Password</h4>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            className="bg-[#eeeeee] py-2 px-4 border rounded mb-7 w-full text-lg placeholder:text-base"
          />
          <button className="bg-[#111] text-white w-full font-semibold px-2 py-2 rounded mb-7">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/login" className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is proceted by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply.</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
