import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "components/SharedLayout";


const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export const App = () => {
    return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path='movies' element={<Movies />} />
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />}></Route>
            <Route path='reviews' element={<Reviews />}></Route>
          </Route>

          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    );
  };
