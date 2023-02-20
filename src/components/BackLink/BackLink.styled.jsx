import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
display: inline-flex;
align-items: center;
gap: 4px;
padding: 8px;
color: black;
text-decoration: none;
font-weight: 500;
text-transform: uppercase;
background-color: blue
border-radius: 4px;

&.active {
    color: white;
    background-color: orangered;
}
`