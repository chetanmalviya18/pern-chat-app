import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (inputs) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "/api/auth/login",
        { username: inputs.username, password: inputs.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // const res = await fetch("/api/auth/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(inputs),
      // });
      // const data = await res.json();

      if (!res.ok) throw new Error(res.error);
      //   console.log(data);
      setAuthUser(res);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
