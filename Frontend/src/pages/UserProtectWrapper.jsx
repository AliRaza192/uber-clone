import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigator = useNavigate();

  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState();

  console.log(token);

  useEffect(() => {
    if (!token) {
      navigator("/login");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response === 200) {
          setUser(response.data.user);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err); 
        localStorage.removeItem("token");
        navigator("/login");
      });
  }, [token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
