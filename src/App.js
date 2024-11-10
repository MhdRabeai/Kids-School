/* eslint-disable no-dupe-keys */
import {
  // createBrowserRouter,
  Route,
  // RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Root } from "./pages/Root";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ChangePassword } from "./pages/ChangePassword";
import { ForgPassword } from "./pages/ForgPassword";
import { NotFound } from "./pages/NotFound";
import SignRoot from "./pages/SignRoot";
// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Root />,
//       children: [
//         { index: true, element: <Home /> },
//         // { path: "login", element: <Login /> },
//         { path: "register", element: <Register /> },
//         { path: "changePassword", element: <ChangePassword /> },
//         { path: "ForgatePassword", element: <ForgPassword /> },
//         { path: "*", element: <NotFound /> },
//       ],
//       path: "/login",
//       element: <Login />,
//     },
//   ],
//   {
//     future: {
//       v7_relativeSplatPath: true,
//     },
//   }
// );
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "preline/preline";
import { HSStaticMethods } from "preline/preline";
function App() {
  const location = useLocation();

  useEffect(() => {
    require("preline/preline");
  }, []);

  useEffect(() => {
    // @ts-ignore
    HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/auth" element={<SignRoot />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="changePassword" element={<ChangePassword />} />
        <Route path="ForgatePassword" element={<ForgPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
