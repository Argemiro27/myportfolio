import React from "react";
import * as S from "./styles";
import { AiTwotoneHome, AiFillGithub, AiTwotoneMail } from 'react-icons/ai';

const Nav = () => {
  return (
    <S.Nav>
      <S.Ul>
        <S.Li>
          <S.NavLink href="/inicio"><AiTwotoneHome/> Inicio</S.NavLink>
        </S.Li>
        <S.Li>
          <S.NavLink href="/projetos"><AiFillGithub/> Projetos</S.NavLink>
        </S.Li>
        <S.Li>
          <S.NavLink href="/contato"><AiTwotoneMail/> Contato</S.NavLink>
        </S.Li>
      </S.Ul>
    </S.Nav>
  );
};

export default Nav;
