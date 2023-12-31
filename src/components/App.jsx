import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Layout} from './Layout/Layout';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const location = useLocation();
  return (
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Suspense fallback={<p>Loading...</p>}>
              <Movies />
            </Suspense>} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="reviews" element={<Reviews />} />
              <Route path="cast" element={<Cast />} />
            </Route>
          </Route>
          <Route path="*" element={<Home />} />
      </Routes>
    
  );
};

export default App;


