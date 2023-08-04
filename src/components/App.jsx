import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Layout from './Layout';
import Cast from './Cast';
import Reviews from './Reviews';
import NotFound from './NotFound';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 30,
        color: '#010101',
        padding: 20,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
