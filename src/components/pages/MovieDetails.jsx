import { useEffect, useRef, useState } from 'react';
import { Loader } from 'components/Loader';
import '../styles.css';

const { useParams, Link, Outlet, useLocation } = require('react-router-dom');

const MovieDetails = () => {
  const { movieId } = useParams();
  const [imgFilm, setImgFilm] = useState(null);
  const [title, setTitle] = useState(null);
  const [overview, setOverview] = useState(null);
  const [genres, setGenres] = useState([]);
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const backLinkLocation = useRef(location.state.from ?? '/movie');

  useEffect(() => {
    setLoader(true);
    const API_KEY = 'd70391bd104bbaa3c93dcadd8b9cf3d4';
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(json => {
        setTitle(json.title);
        setImgFilm(json.poster_path);
        setOverview(json.overview);
        setGenres(json.genres);
        setLoader(false);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);
  const urlPoster = 'http://image.tmdb.org/t/p/w500';
  return (
    <>
      {loader && <Loader />}
      <button className="btnGoBack">
        <Link to={backLinkLocation.current}>Go back</Link>
      </button>

      <h2>{title}</h2>
      <div className="Movie">
        {imgFilm === null ? (
          <img
            src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
            alt=""
            width={200}
          />
        ) : (
          <img src={urlPoster + imgFilm} alt="" width={200} />
        )}
        <div>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres.map(genr => {
            return <p key={genr.id}>{genr.name}</p>;
          })}
        </div>
      </div>
      <h3>Additional information</h3>
      <ul className="MovieInfo">
        <li>
          <Link to="cast" state={{ from: backLinkLocation }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkLocation }}>
            Reviews{' '}
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;

// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/movie/%27id-1234%27';
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

// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/movie/%27id-1234%27/credits';
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

// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/movie/%27id-1234%27/reviews';
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
