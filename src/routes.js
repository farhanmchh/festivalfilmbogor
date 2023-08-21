import React from "react";

const Beranda = React.lazy(() => import("./views/beranda/Index"));
const Program = React.lazy(() => import("./views/program/Index"));
const Tentang = React.lazy(() => import("./views/tentang/Index"));

const routes = [
  {
    path: "/beranda",
    name: "Beranda",
    element: Beranda,
  },
  {
    path: "/program",
    name: "Program",
    element: Program,
  },
  {
    path: "/tentang",
    name: "Tentang",
    element: Tentang,
  },
];

export default routes;
