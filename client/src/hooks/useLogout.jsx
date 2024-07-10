import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import { Navigate } from "react-router-dom";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/auth/logout");
      // const data = await res.json();

      // if (!res.ok) throw new Error(data.error);

      if (!res) throw new Error(res.data.error);

      setAuthUser(null);
      // <Navigate to="/login" />;
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
