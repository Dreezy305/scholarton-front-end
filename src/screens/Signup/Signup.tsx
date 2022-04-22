import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import Glass from "../../assets/images/glassbg.png";

const Signup = () => {
  return (
    <section id="sign-up" className="">
      <div className="flex flex-col md:flex-row lg:flex-row overflow-hidden">
        <img src={Glass} alt="glass" className="hidden md:hidden lg:block" />

        <div className="items-center mx-auto overflow-hidden mt-12 md:w-full lg:w-2/4 w-full">
          <form
            className="flex flex-col space-y-8 items-center text-center px-12"
            id="form"
            role={"form"}
            onSubmit={(e) => e.preventDefault()}
          >
            <h4 className="text-black font-MontserratMedium font-medium text-2xl leading-6 text-center mx-auto">
              Register
            </h4>

            <div className="flex flex-col space-y-2 items-start w-full">
              <label className="font-MontserratRegular font-normal text-black text-lg leading-5">
                First Name
              </label>
              <input
                type={"text"}
                value=""
                className="border-[1px] border-solid border-bgBlue px-4 py-3 rounded-[20px] bg-white w-full"
                name="firstName"
                required
                style={{
                  outline: "none",
                  boxShadow: "none",
                  background: "#ffffff",
                }}
                id="firstName"
              />
            </div>

            <div className="flex flex-col space-y-2 items-start w-full">
              <label className="font-MontserratRegular font-normal text-black text-lg leading-5">
                Last Name
              </label>
              <input
                type={"text"}
                value=""
                className="border-[1px] border-solid border-bgBlue px-4 py-3 rounded-[20px] bg-white w-full"
                name="LastName"
                required
                style={{
                  outline: "none",
                  boxShadow: "none",
                  background: "#ffffff",
                }}
                id="LastName"
              />
            </div>

            <div className="flex flex-col space-y-2 items-start w-full">
              <label className="font-MontserratRegular font-normal text-black text-lg leading-5">
                Phone Number
              </label>
              <input
                type={"tel"}
                value=""
                className="border-[1px] border-solid border-bgBlue px-4 py-3 rounded-[20px] bg-white w-full"
                name="phone"
                required
                style={{
                  outline: "none",
                  boxShadow: "none",
                  background: "#ffffff",
                }}
                id="phone"
              />
            </div>

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

            <div className="flex flex-col space-y-2 items-start w-full">
              <label className="font-MontserratRegular font-normal text-black text-lg leading-5">
                Confirm Password
              </label>
              <input
                type={"password"}
                value=""
                className="border-[1px] border-solid border-bgBlue px-4 py-3 rounded-[20px] bg-white w-full"
                name="confirm_password"
                required
                style={{
                  outline: "none",
                  boxShadow: "none",
                  background: "#ffffff",
                }}
                id="confirm_password"
              />
            </div>

            <div className="mt-5 w-full">
              <button
                className="text-center rounded-full text-white px-5 py-3 bg-bgBlue cursor-pointer w-full font-MontserratMedium"
                type="button"
              >
                Get Started
              </button>
            </div>

            <div className="mt-5 w-full text-center">
              <p className="font-MontserratMedium font-medium text-2xl leading-6">
                <span className="text-black">Already registered?</span>{" "}
                <span className="text-bgBlue cursor-pointer">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
