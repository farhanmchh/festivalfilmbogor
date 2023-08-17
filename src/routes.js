import React from "react"

const Beranda = React.lazy(() => import("./views/beranda/Index"))

const routes = [
  {
    path: "/beranda",
    name: "Beranda",
    element: Beranda
  }
]

export default routes