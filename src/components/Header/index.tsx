import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { Container } from "./styles";
import ImgLogoLight from "../Img/ImgLogoLight";
import Nav from "../Nav";
import ImgLogoDark from '../Img/ImgLogoDark';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      {title === "dark" ? <ImgLogoDark /> : <ImgLogoLight />}
      <Nav />
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
    
  );
};

export default Header;
