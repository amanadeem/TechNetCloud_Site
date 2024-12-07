import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const [isLight, setIsLight] = useContext(ThemeContext);
  const [isResNavVisible, setIsResNavVisible] = useState(false);

  const toggleTheme = () => {
    setIsLight((prevIsLight) => {
      const newIsLight = !prevIsLight;

      localStorage.setItem("isLightMode", JSON.stringify(newIsLight));

      if (newIsLight) {
        document.body.classList.add("lightMode");
      } else {
        document.body.classList.remove("lightMode");
      }

      return newIsLight;
    });
  };

  const toggleResNav = () => {
    setIsResNavVisible((prev) => !prev);
  };

  return (
    <>
      <header
        className="nav md:max-w-full md:px-16 md:py-7 md:items-center md:shadow-sm md:transition-all transition-all max-w-full px-2 py-4 items-center shadow-sm sticky top-0 z-20
      "
      >
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <div className="logo rounded-[50%] bg-white w-12 h-12 p-2">
              <img
                className="w-full h-full cursor-pointer"
                src="src/assets/favicon.webp"
                alt="logo"
              />
            </div>
          </Link>
          <div
            className="links md:flex md:justify-center md:items-center md:gap-2 md:w-4/5
          hidden
          "
          >
            <ul className="flex justify-evenly items-center gap-16 text-lg">
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="link">Home</li>
              </NavLink>

              <NavLink
                to={"/services"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="link">Services</li>
              </NavLink>

              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="link">About</li>
              </NavLink>

              <NavLink
                to={"/contact"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="link">Contact</li>
              </NavLink>
            </ul>
          </div>
          <div className="theme cursor-pointer flex items-start justify-center gap-4">
            <div
              className="text-2xl w-6 h-6"
              onClick={toggleTheme}
              style={{
                color: isLight ? "black" : "white",
              }}
            >
              <FontAwesomeIcon icon={isLight ? faMoon : faSun} />
            </div>
            <div
              onClick={toggleResNav}
              className="menuBar flex text-3xl
          md:hidden
          "
            >
              <FontAwesomeIcon
                className={`bars ${isResNavVisible ? "hidden" : "flex"}`}
                icon={faBars}
              />
              <FontAwesomeIcon
                className={`cross ${isResNavVisible ? "flex" : "hidden"}`}
                icon={faX}
              />
            </div>
          </div>
        </div>
      </header>

      <div
        className={`resNav sticky top-16 ${
          isResNavVisible ? "flex" : "hidden"
        } justify-end items-end px-10 py-2 gap-2 w-full`}
      >
        <ul className="resNav flex flex-col h-[200px] w-[200px] px-4 py-1 shadow-md justify-center gap-3 rounded-md text-lg">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="link">Home</li>
          </NavLink>

          <NavLink
            to={"/services"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="link">Services</li>
          </NavLink>

          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="link">About</li>
          </NavLink>

          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="link">Contact</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
