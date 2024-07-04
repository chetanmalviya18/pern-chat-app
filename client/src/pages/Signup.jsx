import React from "react";
import CheckBox from "../components/CheckBox";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col mt-5 items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-400">Chat App</span>
        </h1>

        <form className="flex flex-col gap-6 mt-7">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full input input-bordered h-10"
            />
          </div>

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

          <div>
            <input
              type="password"
              placeholder="Confrim Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <CheckBox />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block text-white"
          >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
