import { Link, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';

const MoviesListItem = ({title, id}) => {
  const location = useLocation();

    return (
        <li>
          <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>  
        </li>
    )
}

export default MoviesListItem

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};