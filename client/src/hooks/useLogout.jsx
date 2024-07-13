import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

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
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
