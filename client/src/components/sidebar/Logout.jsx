import { LogOut } from "lucide-react";
import React from "react";
import useLogout from "../../hooks/useLogout";

const Logout = () => {
  const { logout } = useLogout();

  return (
    <div className="mt-10 items-start">
      <LogOut onClick={logout} className="w-6 h-6 text-white cursor-pointer" />
    </div>
  );
};

export default Logout;
