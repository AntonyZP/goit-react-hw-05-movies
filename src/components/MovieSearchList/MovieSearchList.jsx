import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieSearchList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <div>
      {movies && (
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieSearchList

MovieSearchList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
  };

