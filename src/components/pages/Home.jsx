import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [films, setFilms] = useState([]);

  //api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}
  useEffect(() => {
    const API_KEY = 'd70391bd104bbaa3c93dcadd8b9cf3d4';
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(json => {
        setFilms(json.results);
      })
      .catch(err => console.error('error:' + err));
  }, []);
  return (
    <div>
      <h1>Most popular movies</h1>
      <ul>
        {films.map(film => {
          return (
            <li key={film.id}>
              <Link to={`${film.id}`}>{film.original_title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
