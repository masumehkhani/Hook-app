import React from "react";
import { useState, useMemo } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const themeStyle = {
    background: darkMode ? "#000" : "#fff",
    color: darkMode ? "#fff" : "#000",
  };
  const themeModeHandler = () => {
    setDarkMode(!darkMode);
  };
  const doubleNumber = useMemo(() => slowFunction(number), [number]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <div>
        <button
          onClick={themeModeHandler}
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          change theme
        </button>
      </div>
      <p style={themeStyle}>{doubleNumber}</p>
    </div>
  );
};
const slowFunction = (num) => {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};
export default UseMemo;
