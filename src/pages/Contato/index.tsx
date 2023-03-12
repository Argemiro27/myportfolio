import React from "react";
import { Content } from "../../components/Content/styles";
import { Title } from "../../components/Content/styles";
import Typist from "react-typist";
import { Table, Tr, Td, IconTd } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


const Contato = () => {
  return (
    <div>
      <Content>
        <Typist avgTypingDelay={150}>
          <center><Title>Contato</Title></center>
        </Typist>

          <Table>
            <tbody>
              <Tr>
                <IconTd>
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </IconTd>
                <Td>(35) 9 8709-3215</Td>
              </Tr>
              <Tr>
                <IconTd>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </IconTd>
                <Td>argemirojunior123@gmail.com</Td>
              </Tr>
              <Tr>
                <IconTd>
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </IconTd>
                <Td>https://github.com/Argemiro27</Td>
              </Tr>
              <Tr>
                <IconTd>
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </IconTd>
                <Td>https://www.linkedin.com/in/argemiro-junior-28319b250/</Td>
              </Tr>
              <Tr>
                <IconTd>
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </IconTd>
                <Td>https://www.instagram.com/mirojr__/</Td>
              </Tr>
            </tbody>
          </Table>
      </Content>
    </div>
  );
};

export default Contato;
