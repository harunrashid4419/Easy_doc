import { HiSun, HiMoon } from "react-icons/hi";
import { useEffect, useRef } from "react";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const checkbox = useRef();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      checkbox.current.checked = true;
    } else {
      checkbox.current.checked = false;
    }
  }, [theme]);

  const changeTheme = (theme, setTheme) => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <label className="swap swap-rotate">
      <input
        ref={checkbox}
        type="checkbox"
        onClick={() => changeTheme(theme, setTheme)}
      />
      <HiSun className="swap-off text-xl" />
      <HiMoon className="swap-on text-xl" />
    </label>
  );
};

export default ThemeToggle;
