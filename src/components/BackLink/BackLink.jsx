// import { StyledLink } from './BackLink.styled'

// import { Link } from "react-router-dom";
import { StyledLink } from './BackLink.styled';



const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
};

export default BackLink
