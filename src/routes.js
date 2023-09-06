import React from 'react';

const Beranda = React.lazy(() => import('./views/beranda/Index'));
const Program = React.lazy(() => import('./views/program/Index'));
const Tentang = React.lazy(() => import('./views/tentang/Index'));
const Galeri = React.lazy(() => import('./views/galeri'));
const kontak = React.lazy(() => import('./views/kontak/Index'));

const routes = [
  {
    path: '/beranda',
    name: 'Beranda',
    element: Beranda,
  },
  {
    path: '/program',
    name: 'Program',
    element: Program,
  },
  {
    path: '/tentang',
    name: 'Tentang',
    element: Tentang,
  },
  {
    path: '/galeri',
    name: 'Galeri',
    element: Galeri,
  },
  {
    path: '/kontak',
    name: 'Kontak',
    element: kontak,
  },
];

export default routes;
