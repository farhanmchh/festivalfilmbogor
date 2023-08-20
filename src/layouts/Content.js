import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import routes from '../routes';

export default function Content() {
  return (
    <div className="mt-20 z-10">
      <Routes>
        {routes.map((route, index) => {
          return (
            route.element && (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />
            )
          );
        })}
        <Route path="*" element={<Navigate to="/beranda" replace />} />
      </Routes>
    </div>
  );
}
