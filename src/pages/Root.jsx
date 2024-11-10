// import React, { useState } from "react";
// import { Loading } from "../components/Loading";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import React from "react";
export const Root = () => {
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="dark:bg-black">
      <Navbar />
      {/* {isLoading ? <Loading /> : <Outlet />} */}
      <Outlet />
    </div>
  );
};
