import React from "react";
import { extratoLista } from "../../info";
import Items from "../Items";
import { Botao, Box } from "../UI/index";

const Extrato = () => {
  return (
    <>
      <Box>
        {extratoLista.updates.map(({ id, type, from, value, date }) => {
          return <Items key={id} type={type} from={value} date={date} />;
        })}
        <Botao>Ver Mais</Botao>
      </Box>
    </>
  );
};

export default Extrato;
