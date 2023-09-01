import { Menu } from "@mui/icons-material";
import { List, ListItem, ListItemButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const navbarLink = [
  { name: "Beranda", href: "/beranda", active: false },
  { name: "Tentang", href: "/tentang", active: false },
  { name: "Program", href: "/program", active: false },
  { name: "Arsip", href: "/arsip", active: false },
  { name: "Kontak", href: "/kontak", active: false },
];

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  navbarLink.forEach((navbar) => {
    if (navbar.href == pathname) {
      navbar.active = true;
    } else {
      navbar.active = false;
    }
  });

  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <div className="flex justify-between w-full h-20 bg-white shadow-md fixed z-40">
      <div className="px-10 flex justify-between w-full">
        <img src="/assets/logo-badge-black.svg" className="w-14" />
        <span
          className="self-center sm:hidden"
          onClick={() => setShowNavigation(!showNavigation)}
        >
          <Menu fontSize="large" />
        </span>
        <div className="hidden sm:flex gap-10 my-auto ">
          {navbarLink.map((navbar) => (
            <a
              href={navbar.href}
              className={`text-black ${
                navbar.active ? "text-opacity-100" : "text-opacity-50"
              }`}
            >
              {navbar.name}
            </a>
          ))}
        </div>
      </div>
      <div
        className={`bg-white w-full absolute top-20 -z-10 ${
          showNavigation ? "block" : "hidden"
        }`}
        style={{
          animation: showNavigation ? "in-from-top 0.3s" : "out-to-top 0.3s",
        }}
      >
        <List>
          {navbarLink.map((navbar) => (
            <ListItem>
              <ListItemButton>
                <a
                  href={navbar.href}
                  className={`text-black ${
                    navbar.active ? "text-opacity-100" : "text-opacity-50"
                  }`}
                >
                  {navbar.name}
                </a>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
