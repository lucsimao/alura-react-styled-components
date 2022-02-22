import React from "react";
import {
  default as ThemeOff,
  default as ThemeOn,
} from "../../assets/images/themeOn.svg";
import { Icone } from "../UI";

const claro = <Icone src={ThemeOn} alt="Tema Claro" />;
const escuro = <Icone src={ThemeOff} alt="Tema Escuro" />;

export default ({ tema }) => (tema ? escuro : claro);
