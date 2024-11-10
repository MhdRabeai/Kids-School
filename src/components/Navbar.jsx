import React from "react";

export const Navbar = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggleTheme} className="dark:text-white">
      DarkMode
    </button>
  );
};
