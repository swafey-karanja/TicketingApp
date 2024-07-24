'use client';

import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import ThemeContext from "@/context/themeContext";
import { useContext } from "react";

const Header = () => {

  const {darkTheme, setDarkTheme} = useContext(ThemeContext);

  return (
    <header
    className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between"
    >
      <div className="flex items-center w-full md:2/3">
        <Link href="/" className="font-black text-tertiary-dark">
          Transylvania
        </Link>

        <ul className="flex items-center ml-5">
          <li className="flex items-center">
            <Link href="/auth">
              <FaUserCircle className="cursor-pointer" />
            </Link>
          </li>

          <li className="ml-5">
            {darkTheme 
            ? (<MdOutlineLightMode className="cursor-pointer" 
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("hotel-theme");
                }}
            />) 
            : (<MdDarkMode className="cursor-pointer" 
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("hotel-theme", "true");
                }}
            />)}
          </li>
        </ul>
      </div>

      <ul className="flex items-center justify-between w-full md:w-1/3 mt-4 ">
        <li className="font-bold hover:-translate-y-2 durations-500 transition-all">
            <Link href="/" className="mr-4">
              Home
            </Link>
        </li>

        <li className="font-bold hover:-translate-y-2 durations-500 transition-all">
            <Link href="/rooms" className="mr-4">
              Rooms
            </Link>
        </li>

        <li className="font-bold hover:-translate-y-2 durations-500 transition-all">
            <Link href="/contacts" className="">
              Contacts
            </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;