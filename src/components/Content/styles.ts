import styled, { css } from "styled-components";

export const Content = styled.div`
  width: 150vh;
  min-height: 70vh;
  height: auto;
  ${({ theme }) => theme.title === 'dark' && css`
    background-color: #968fa8;
    box-shadow: 0px 0px 29px -7px rgba(75,62,92,1);
  `}
  ${({ theme }) => theme.title === 'light' && css`
    background-color: #8c84ad;
    box-shadow: 0px 0px 34px -3px rgba(59,32,45,1);
  `}
  margin: auto;
  border-radius: 10px;
  border-top: 35px solid #1e1d29;
  border-left: 5px solid #1e1d29;
  border-right: 5px solid #1e1d29;
  border-bottom: 7px dotted #1e1d29;
  padding: 40px;
  text-align: left;
  line-height: 28px;
  font-family: 'M PLUS Code Latin', sans-serif;
`;

export const Title = styled.div`
  position: relative;
  font-size: 15px;
  font-weight: 700;
  font-style: italic;
  display: inline-block;
  ${({ theme }) => theme.title === 'dark' && css`
    color: #422433;
  `}
  ${({ theme }) => theme.title === 'light' && css`
    color: #312438;
  `}
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    margin-top: 5px;
    margin-bottom: -6px;
    background: #422433;
    transition: width 0.5s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const Text = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

export const TypistContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 40%;
  transform: translate(-50%, -50%);
`;

export const About = styled.div`

`