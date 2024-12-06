import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  let showResNav = 1;
  const resNav = () => {
    if (showResNav) {
      document.querySelector(".resNav").style.display = "flex";
      document.querySelector(".bars").style.display = "none";
      document.querySelector(".cross").style.display = "flex";
      showResNav = 0;
    } else {
      document.querySelector(".resNav").style.display = "none";
      document.querySelector(".cross").style.display = "none";
      document.querySelector(".bars").style.display = "flex";
      showResNav = 1;
    }
  };

  return (
    <>
      <header
        className="md:max-w-full md:px-6 md:py-7 nav md:items-center md:bg-[#1E292E] md:bg-opacity-80 md:shadow-xl	
      max-w-full px-2 py-4 items-center bg-[#1E292E] bg-opacity-80 shadow-xl sticky top-0 z-20
      "
      >
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <div className="logo rounded-[50%] bg-white w-12 h-12 p-2">
              <img
                className="w-full h-full cursor-pointer"
                src="src\assets\favicon.webp"
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
              <NavLink to={"/"}>
                <li className="cursor-pointer text-slate-300 hover:text-slate-50">
                  Home
                </li>
              </NavLink>

              <NavLink to={"/services"}>
                <li className="cursor-pointer text-slate-300 hover:text-slate-50">
                  Services
                </li>
              </NavLink>

              <NavLink to={"/about"}>
                <li className="cursor-pointer text-slate-300 hover:text-slate-50">
                  About
                </li>
              </NavLink>

              <NavLink to={"/contact"}>
                <li className="cursor-pointer text-slate-300 hover:text-slate-50">
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="theme cursor-pointer flex items-start justify-center gap-4">
            <div className="text-2xl w-6 h-6">
              <FontAwesomeIcon icon={faSun} />
            </div>
            <div
              onClick={() => resNav()}
              className="menuBar flex text-3xl
          md:hidden
          "
            >
              <FontAwesomeIcon className="bars" icon={faBars} />
              <FontAwesomeIcon className="cross hidden" icon={faX} />
            </div>
          </div>
        </div>
      </header>

      <div className="resNav sticky top-16 hidden bg-[#1E292E] justify-end items-end px-10 py-2 gap-2 w-full">
        <ul className="flex flex-col bg-[#1D2B30] h-[200px] w-[200px] px-4 py-1 border border-[#172528] shadow-sm justify-center gap-3 rounded-md text-lg">
          <NavLink to={"/"}>
            <li className="cursor-pointer text-slate-300 hover:text-slate-50">
              Home
            </li>
          </NavLink>

          <NavLink to={"/services"}>
            <li className="cursor-pointer text-slate-300 hover:text-slate-50">
              Services
            </li>
          </NavLink>

          <NavLink to={"/about"}>
            <li className="cursor-pointer text-slate-300 hover:text-slate-50">
              About
            </li>
          </NavLink>

          <NavLink to={"/contact"}>
            <li className="cursor-pointer text-slate-300 hover:text-slate-50">
              Contact
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
