import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
padding: 8px;
margin-bottom: 20px;
border-radius: 5px;
color: black;
background-color: blue;

text-decoration: none;

&.active {
    color: white;
    background-color: orangered;
}
`