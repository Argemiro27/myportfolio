import styled, { css } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 510px;
  border-radius: 5px;
  ${({ theme }) => theme.title === 'dark' && css`border: 2px dashed #422433; background-color: #24212e;`}
  ${({ theme }) => theme.title === 'light' && css`border: 2px dashed #a682cf; background-color: #58377d`}
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  padding: 15px;
  border-radius: 4px;
  ${({ theme }) => theme.title === 'dark' && css`background-color: #422433; color: #706280; box-shadow: 7px 7px 4px -3px rgba(59,32,45,1);`}
  ${({ theme }) => theme.title === 'light' && css`background-color: #a682cf; color: #e6e6e6; box-shadow: 7px 7px 4px -3px rgba(127,108,148,1);`}
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

export const Li = styled.li`
  margin-left: 20px;
`;
