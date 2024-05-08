import { useEffect, useState } from "react";

const activeCircleStyle = " flex items-center justify-center p-1 rounded-full";
function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    toggleHandler(localTheme);
  }, []);
  function toggleHandler(theme) {
    if (!theme) return;
    if (theme === "dark") {
      document.documentElement.classList.add(theme);
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    setTheme(theme);
  }
  return (
    <div className=" flex h-8 w-14 items-center justify-around rounded-full bg-slate-600 dark:bg-slate-600">
      <button
        onClick={() => toggleHandler("light")}
        className={`${activeCircleStyle} ${
          theme === "light" ? "bg-white" : ""
        }`}
      >
        <i
          className="fa-solid fa-sun  rounded-full 
      text-xs text-black dark:text-white"
        ></i>
      </button>
      <button
        onClick={() => toggleHandler("dark")}
        className={`${activeCircleStyle} ${theme === "dark" ? "bg-white" : ""}`}
      >
        <i className="fa-solid fa-moon text-xs text-white dark:text-black"></i>
      </button>
    </div>
  );
}
export default ThemeSwitcher;
