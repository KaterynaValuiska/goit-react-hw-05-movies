// import { Link } from 'react-router-dom';
const Movies = () => {
  return (
    <div>
      <h2>Search film</h2>
      {/* {['abs', 'ddd', 'ccc'].map(movie => {
        return (
          <ul>
            <li>
              <Link key={movie} to={`${movie}`}>
                {movie}
              </Link>
            </li>
          </ul>
        );
      })} */}
    </div>
  );
};

export default Movies;

// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/search/movie?query=%27dog%27';
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
