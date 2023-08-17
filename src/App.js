import React from 'react';
import './App.css';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const DefaultLayout = React.lazy(() => import('./layouts/DefaultLayout'));

function App() {
  return (
    <Suspense fallback={<div className="w-full h-full bg-white"></div>}>
      <Routes>
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
    </Suspense>
  );
}

export default App;
