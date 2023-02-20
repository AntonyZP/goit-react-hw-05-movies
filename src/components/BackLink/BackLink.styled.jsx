import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
display: inline-flex;
align-items: center;
gap: 4px;
padding: 8px;
text-decoration: none;
font-weight: 400;
font-size: 16px;
text-transform: uppercase;
color: black
background-color: #D2CECA;
border-radius: 4px;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); 
  &:hover,
  &:focus {
    background-color: #A5998C;
    color: black
  }

`