import React from "react";
import { HTMLProps } from "react";
import * as S from "./styles";

interface IContentProps extends HTMLProps<HTMLDivElement> {
  backgroundColor?: string;
}

const Content = ({ children }: IContentProps) => {
  return (
    <>
    <S.Content>
      {children}
    </S.Content>
    </>
  );
};

export default Content;
