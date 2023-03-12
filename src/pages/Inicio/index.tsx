import React from 'react';
import { About, Content, Text, TypistContainer } from '../../components/Content/styles';
import { Title } from '../../components/Content/styles';
import Typist from 'react-typist';
import Photo from '../../components/Img/Photo';

const Inicio = () => {
  return (
    <Content>
      <div style={{ position: "relative" }}>
        <Photo/>
        <TypistContainer>
          <Typist>
            <Title>// Bem vindo ao meu portfólio! ❤</Title>
            <Text>➵ Meu nome é Argemiro Junior</Text>
            <Text>➵ Sou Desenvolvedor Web Júnior e Técnico em Informática, </Text>
            <Text>➵ formado pelo CEFET-MG Campus Varginha.</Text>
          </Typist>
        </TypistContainer>
        <About>
          <Title>Sobre mim:</Title>
          <Text>Sempre amei desenvolver sites e meu primeiro contato foi com o Weebly, onde autonomamente comecei a me interessar por Web Design trabalhando com HTML e CSS básico.</Text>
          <Text>Como forma de tentar aprimorar minhas habilidades, ingressei no CEFET-MG, onde consegui tanto desenvolver melhor as habilidades que eu já tinha com HTML, CSS e Javascript, quanto aprender a trabalhar com frameworks, bibliotecas, construção de ambientes front-end (utilizando React.js), e back-end (desenvolvendo API's com Adonis com Node.js, conexão um servidor, um banco de dados utilizando o Docker e suas tecnologias)</Text>
          <Text>Me considero um desenvolvedor com um perfil comportamental criativo, o que me atrai tanto trabalhar com desenvolvimento front-end. Possuo alguns conhecimentos front-end, sei desenvolver projetos e prototipações no Figma, e apesar de me encontrar na posição de um desenvolvedor júnior, estou muito motivado a ingressar profissionalmente no ramo de tecnologia, em busca de um dia atingir a senioridade.</Text>
        </About>
      </div>
    </Content>
  );
}

export default Inicio;