import styled, { css } from "styled-components";

export const Table = styled.table`
  margin: auto;
  border-collapse: separate;
  border-spacing: 0 20px;
  padding: 30px;
  border-radius: 10px;
  ${({ theme }) => theme.title === 'dark' && css`
    background-color: #343140;
    border-left: 15px solid #191721;
    border-right: 15px solid #191721;
  `}
  ${({ theme }) => theme.title === 'light' && css`
    background-color: #d6cae3;
    border-left: 15px solid #1a1a28;
    border-right: 15px solid #1a1a28;
  `}
`;

export const Tr = styled.tr`
  display: flex;
  flex-direction: row;
`;

export const Td = styled.td`
  padding-left: 10px;
  
  ${({ theme }) => theme.title === 'dark' && css`
    color: #0f0d14;
  `}
  ${({ theme }) => theme.title === 'light' && css`
    color: #1a1a28;
  `}  
`;

export const IconTd = styled.td`
  color: #1a1a28;
  font-size: 30px;
  padding-top: 5px;
  ${({ theme }) => theme.title === 'dark' && css`
    color: #0f0d14;
  `}
  ${({ theme }) => theme.title === 'light' && css`
    color: #1a1a28;
  `}
`;
