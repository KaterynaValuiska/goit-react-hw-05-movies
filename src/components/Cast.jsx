import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const API_KEY = 'd70391bd104bbaa3c93dcadd8b9cf3d4';
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    )
      .then(res => res.json())
      .then(json => {
        setCast(json.cast);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);
  const urlPoster = 'http://image.tmdb.org/t/p/w500';
  return (
    <div>
      <h3>CAST</h3>
      {cast.map(person => {
        return (
          <div key={person.id}>
            <img src={urlPoster + person.profile_path} alt="" width={100} />
            <p>
              {person.original_name} ({person.character})
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cast;
