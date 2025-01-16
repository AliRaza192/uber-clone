
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigator = useNavigate();

  const logoutUser = async () => {
    if (!token) {
      console.error("No token found!");
      navigator("/login");
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/logout`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem("token");
        navigator("/login");
      }
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
      if (error.response?.status === 401) {
        console.log("Unauthorized! Redirecting to login.");
        navigator("/login");
      }
    }
  };

  logoutUser();

  return <div>UserLogout</div>;
};

export default UserLogout;
