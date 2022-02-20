import React from "react";
import styled from "styled-components";
import Conta from "../Conta";
import Titulo from "../Titulo";

const Container = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;
const Conteudo = styled.session`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
      </Conteudo>
    </Container>
  );
};
