import React from "react";
import { Link } from "react-router-dom";
import Glass from "../../assets/images/glassbg.png";
import "./login.css";

const Login = () => {
  return (
    <section className="overflow-hidden h-screen" id="login">
      <div className="flex flex-col md:flex-row lg:flex-row overflow-hidden">
        <img src={Glass} alt="glass" className="hidden md:hidden lg:block" />
        <div className="items-center mx-auto overflow-hidden mt-24 md:w-full lg:w-2/4 w-full">
          <form
            className="flex flex-col space-y-8 items-center text-center px-12"
            id="form"
            role={"form"}
            onSubmit={(e) => e.preventDefault()}
          >
            <h4 className="text-black font-MontserratMedium font-medium text-2xl leading-6 text-center mx-auto">
              Welcome Back
            </h4>

            <div className="flex flex-col space-y-2 items-start w-full">
              <label className="font-MontserratRegular font-normal text-black text-lg leading-5">
                Email
              </label>
              <input
                type={"email"}
                value=""
                className="border-[1px] border-solid border-bgBlue px-4 py-3 rounded-[20px] bg-white w-full"
                name="email"
                required
                style={{
                  outline: "none",
                  boxShadow: "none",
                  background: "#ffffff",
                }}
                id="email"
              />
            </div>

            <div className="flex flex-col space-y-2 items-start w-full">
              <label className="font-MontserratRegular font-normal text-black text-lg leading-5">
                Password
              </label>
              <input
                type={"password"}
                value=""
                className="border-[1px] border-solid border-bgBlue px-4 py-3 rounded-[20px] bg-white w-full"
                name="password"
                required
                style={{
                  outline: "none",
                  boxShadow: "none",
                  background: "#ffffff",
                }}
                id="password"
              />
            </div>
            <div className="mt-5 w-full">
              <Link to={"/dashboard/home"}>
                <button
                  className="text-center rounded-full text-white px-5 py-3 bg-bgBlue cursor-pointer w-full font-MontserratMedium"
                  type="button"
                >
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
