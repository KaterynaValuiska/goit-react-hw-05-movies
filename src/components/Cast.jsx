import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader';
import './styles.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    const API_KEY = 'd70391bd104bbaa3c93dcadd8b9cf3d4';
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    )
      .then(res => res.json())
      .then(json => {
        setCast(json.cast);
        setLoader(false);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);
  const urlPoster = 'http://image.tmdb.org/t/p/w500';
  return (
    <div>
      <h3>CAST</h3>
      {loader && <Loader />}
      <div className="Cast">
        {cast.map(person => {
          return (
            <div key={person.id} className="CastCard">
              {person.profile_path === null ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                  alt=""
                  width={100}
                  height={150}
                />
              ) : (
                <img src={urlPoster + person.profile_path} alt="" width={100} />
              )}

              <p>{person.original_name}</p>
              <p>Character: {person.character}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cast;
