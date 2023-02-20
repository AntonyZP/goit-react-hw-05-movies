import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  
  padding: 10px 16px;
  width: 500px;
  font-size: 18px;
  color: black;
  background-color: #ffffff;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 960px;

  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px;
  margin: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  color: black;
  text-decoration: none;
  gap: 12px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); 
    
  &.active {
      background-color: #D2CECA;
  }
`
