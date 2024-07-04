import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col mt-5 items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login <span className="text-blue-400">Chat App</span>
        </h1>

        <form className="flex flex-col gap-6 mt-7">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <Link
            to={"/signup"}
            className="text-sm hover:underline text-white hover:text-blue-500 mt-2 inline-block"
          >
            {"Don't"} have an account
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
