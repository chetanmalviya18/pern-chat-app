import { LogOut } from "lucide-react";
import React from "react";

const Logout = () => {
  const logout = () => {
    alert("You are logged out");
  };
  return (
    <div className="mt-auto">
      <LogOut onClick={logout} className="w-6 h-6 text-white cursor-pointer" />
    </div>
  );
};

export default Logout;
