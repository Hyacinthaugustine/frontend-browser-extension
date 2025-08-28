import { useState } from "react";

const NavBar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  localStorage.setItem("theme", theme);
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.setAttribute("theme", savedTheme);
  }
  console.log(savedTheme);

  return (
    <div className="flex justify-between gap-4 rounded-xl items-center px-4 py-3 bg-neutral-700 dark:bg-neutral-50">
      <img
        src="/assets/images/logo.svg"
        alt="logo"
        className="invert brightness-0 dark:invert-0 dark:brightness-100"
      />

      <button
        type="button"
        onClick={toggleTheme}
        className="cursor-pointer border-2 outline-2 rounded-md outline-transparent hover:outline-red-400 border-transparent capitalize focus:outline-2 focus:outline-red-400 focus:outline-offset-2"
      >
        {theme === "light" ? (
          <img
            src="/assets/images/icon-sun.svg"
            alt="moon icon"
            className="h-10 w-10 p-2 bg-neutral-600 dark:bg-neutral-100 shadow-6xl rounded-sm"
          />
        ) : (
          <img
            src="/assets/images/icon-moon.svg"
            alt="sun icon"
            className="h-10 w-10 p-2 bg-neutral-600 dark:bg-neutral-100 shadow-6xl rounded-sm"
          />
        )}
      </button>
    </div>
  );
};

export default NavBar;
