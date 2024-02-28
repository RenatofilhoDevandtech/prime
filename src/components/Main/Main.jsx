/** @format */

import React, { useState } from "react";
import "./Main.css";
import cris from "../../assets/cris.png";

export default function Main() {
  //criando um state
  const [filme, setFilme] = useState();

  function descricao() {
    setFilme("Todo mundo odeia o chris, lançado em 2001, ator x");
  }

  return (
    <>
      <main>
        <section className="banner"></section>

        <section className="cards">
          <div>
            <img onClick={descricao} src={cris} alt="logo" />
            <p> {filme} </p>
          </div>
          <div>
            <img src={cris} alt="logo" />
            <p></p>
          </div>
          <div>
            <img src={cris} alt="logo" />
            <p></p>
          </div>
        </section>
      </main>
    </>
  );
}
