import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #191621;
  width: 510px;
  border: 2px dashed #282436;
  border-radius: 5px;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  background-color: #24212e;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 5px 5px 2px 0px rgba(31,28,38,1);
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

export const Li = styled.li`
  margin-left: 20px;
`;