import React from "react";
import { Input } from "../components/Input";

export const Login = () => {
  return (
    <div className="relative ">
      <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-44 md:px-8 max-h-screen">
        <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
          <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-neutral-200">
            Solving problems for every{" "}
            <span className="text-blue-600 dark:text-blue-500">team</span>
          </h1>

          <form className="pt-10">
            <Input
              inputLabel={"Full name"}
              inputType={"text"}
              inputPlaceHolder={"Enter Full name"}
              inputName={"name"}
            />
            <Input
              inputLabel={"Email address"}
              inputType={"email"}
              inputPlaceHolder={"Enter Email"}
              inputName={"name"}
            />
            <Input
              inputLabel={"Password"}
              inputType={"password"}
              inputPlaceHolder={"Enter Password"}
              inputName={"password"}
            />

            <div className="grid">
              <button
                type="submit"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')] bg-no-repeat bg-center bg-cover max-h-screen"></div>
    </div>
  );
};
