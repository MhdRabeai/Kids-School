import React from "react";
import { Outlet } from "react-router-dom";

const SignRoot = () => {
  return (
    <div className="dark:bg-black">
      {/* {isLoading ? <Loading /> : <Outlet />} */}
      <Outlet />
    </div>
  );
};

export default SignRoot;
