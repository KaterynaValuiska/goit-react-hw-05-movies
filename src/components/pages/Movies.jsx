import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Loader } from 'components/Loader';
const Movies = () => {
  const [films, setFilms] = useState([]);
  const [loader, setLoader] = useState(false);
  const [messege, setMessege] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query === null) {
      return;
    }
    setLoader(true);
    const API_KEY = 'd70391bd104bbaa3c93dcadd8b9cf3d4';
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
    )
      .then(res => res.json())
      .then(json => {
        setFilms(json.results);
        setMessege('Sorry. We did not find any movies.');
        setLoader(false);
      })
      .catch(err => console.error('error:' + err));
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    setSearchParams({ query: form.elements.query.value });
  };

  return (
    <div>
      <h2>Search film</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" value={query} readOnly />
        <button type="submit">search</button>
      </form>
      {loader && <Loader />}
      {}
      {films.length > 0 ? (
        <ul>
          {films.map(film => {
            return (
              <li key={film.id}>
                <Link to={`/movies/${film.id}`} state={{ from: location }}>
                  {film.title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="NotFoundFilm">{messege} </p>
      )}
    </div>
  );
};

export default Movies;
