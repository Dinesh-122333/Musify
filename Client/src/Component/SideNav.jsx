import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import opener from "../assets/Images/opener.png";
import home from "../assets/Images/Home.png";
import explore from "../assets/Images/Explore.png"
import notifications from "../assets/Images/Notifications.png";
import playlists from "../assets/Images/Playlist.png";
import setting from "../assets/Images/Settings.png"



export default function SideNav() {
  const [sidebar, setSidebar] = useState(false);

  const Menus = [
    { title: "Home", path: "/" , icon: home},
    { title: "Explore", path: "/explore", icon: explore},
    { title: "Playlist", path: "/playlist", gap: true, icon: playlists},
    { title: "Notifications", path: "/notifications", gap: true, icon: notifications},
    { title: "Settings", path: "/settings", icon: setting},
  ];

  return (
    <div className="flex">
      <div
        className={`${
          sidebar ? "w-72" : "w-20" } bg-gray-100 h-screen p-5 pt-8 relative duration-300 shadow-lg`}
        >
        <img
          src={opener}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
            !sidebar && "rotate-180"
          }`}
          onClick={() => setSidebar(!sidebar)}
        />
        <div>
          <img
            src={logo}
            className={`cursor-pointer w-10 duration-500 ${
              sidebar && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`origin-left font-medium text-xl duration-200 ${
              !sidebar && "scale-0"
            }`}
          >
            Musify
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
            key={index} 
            className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-200 text-gray-700 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-gray-200"} `}
            >
              <Link to={Menu.path} className="flex items-center gap-x-4">
                <img className="w-10" src={Menu.icon} alt={Menu.title} />
                <span
                  className={`${!sidebar && "hidden"} text-black origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
