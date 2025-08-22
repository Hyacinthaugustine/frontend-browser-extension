import { useState } from "react";

const NavBar = () => {
  const [changeMode, setChangeMode] = useState(false);

  const toogleMode = () => {
    setChangeMode((prev) => !prev);
  };

  return (
    <div className="flex justify-between gap-4 rounded-xl items-center px-4 py-3 bg-neutral-700 dark:bg-neutral-50">
      <img
        src="/assets/images/logo.svg"
        alt="logo"
        className="invert brightness-0 dark:invert-0 dark:brightness-100"
      />

      <button type="button" className="cursor-pointer" onClick={toogleMode}>
        {!changeMode ? (
          <img
            src="/assets/images/icon-sun.svg"
            alt=""
            className="h-10 w-10 p-2 bg-neutral-600 dark:bg-neutral-100 shadow-6xl rounded-md"
          />
        ) : (
          <img
            src="/assets/images/icon-moon.svg"
            alt=""
            className="h-10 w-10 p-2 bg-neutral-600 dark:bg-neutral-100  shadow-6xl rounded-md"
          />
        )}
      </button>
    </div>
  );
};

export default NavBar;
