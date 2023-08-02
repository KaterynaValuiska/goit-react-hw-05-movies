import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const API_KEY = 'd70391bd104bbaa3c93dcadd8b9cf3d4';
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
    )
      .then(res => res.json())
      .then(json => {
        setReviews(json.results);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);
  return (
    <div>
      <h3>REVIES</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(user => {
            return (
              <li key={user.id}>
                {user.author}
                <p>{user.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We do not have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
