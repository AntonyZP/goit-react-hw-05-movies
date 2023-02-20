import PropTypes from 'prop-types';
import { StyledLink } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
};

export default BackLink

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node,
};