import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Loader } from 'components/Loader';
const Movies = () => {
  const [films, setFilms] = useState([]);
  const [loader, setLoader] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messege, setMessege] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (inputValue === '') {
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

  const handleChange = evt => {
    setInputValue(evt.target.value.toLowerCase());
    // setSearchParams({ query: evt.target.value.toLowerCase() });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: inputValue });
    // if (query.trim() === '') {
    //   alert('Not found. Enter your request.');
    //   return;
    // }

    // setSearchParams({ query: '' });
  };
  // const visibleFilms = films.filter(film => film.title.includes(query));

  return (
    <div>
      <h2>Search film</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
        <button type="submit">search</button>
      </form>
      {loader && <Loader />}
      {}
      {films.length > 0 ? (
        <ul>
          {films.map(film => {
            return (
              <li key={film.id}>
                <Link to={`${film.id}`} state={{ from: location }}>
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

// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/search/movie?query={}&';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer a1b7d969f999448bbc786cfc77eb64e6',
//   },
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
