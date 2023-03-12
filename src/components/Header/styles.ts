import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100px;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin-bottom: 50px;

  ${({ theme }) => theme.title === 'dark' && css`
    border-bottom: 2px dashed #422433;
    background-color: #1a1720;
  `}
  ${({ theme }) => theme.title === 'light' && css`
    border-bottom: 2px dashed #a682cf;
    background-color: #8136d6;
  `}
`;


