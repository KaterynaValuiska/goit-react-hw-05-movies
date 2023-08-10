import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoader(true);
    const API_KEY = 'd70391bd104bbaa3c93dcadd8b9cf3d4';
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(json => {
        setFilms(json.results);
        setLoader(false);
      })
      .catch(err => console.error('error:' + err));
  }, []);
  return (
    <div>
      <h1>Most popular movies</h1>
      {loader && <Loader />}
      <ul>
        {films.map(film => {
          return (
            <li key={film.id}>
              <Link
                to={`/movies/${film.id}`}
                state={{ from: location }}
                className="NavLink"
              >
                {film.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
