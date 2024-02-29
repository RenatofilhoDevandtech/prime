import React, { useState } from "react";
import "./Main.css";
import filme2 from "../../assets/filme2.jpg";
import filme5 from "../../assets/filme5.png";
import filme4 from "../../assets/filme4.jpg";
import filme6 from "../../assets/filme6.jpg";
import filme3 from "../../assets/filme3.jpg";
import filme1 from "../../assets/filme1.jpg";

export default function Main() {
  // Criando um estado para armazenar a descrição do filme
  const [filme, setFilme] = useState("");

  // Função para atualizar a descrição do filme quando uma imagem é clicada
  function descricao(descricaoFilme) {
    setFilme(descricaoFilme);
  }

  return (
    <>
      <main>
        <section className="banner"></section>

        <section className="cards">
          {/* Primeira imagem */}
          <div>
            <img
              onClick={() => descricao("Todo mundo odeia o Chris, lançado em 2001, ator x")}
              src={filme1}
              alt="logo"
            />
            <p>{filme}</p>
          </div>
          {/* Segunda imagem */}
          <div>
            <img
              onClick={() => descricao("Descrição do filme 2")}
              src={filme3}
              alt="logo"
            />
            <p>{filme}</p>
          </div>
          {/* Terceira imagem */}
          <div>
            <img
              onClick={() => descricao("Descrição do filme 3")}
              src={filme2}
              alt="logo"
            />
            <p>{filme}</p>
          </div>
          {/* Quarta imagem */}
          <div>
            <img
              onClick={() => descricao("Descrição do filme 4")}
              src={filme5}
              alt="logo"
            />
            <p>{filme}</p>
          </div>
          {/* Quinta imagem */}
          <div>
            <img
              onClick={() => descricao("Descrição do filme 5")}
              src={filme4}
              alt="logo"
            />
            <p>{filme}</p>
          </div>
          {/* Sexta imagem */}
          <div>
            <img
              onClick={() => descricao("Descrição do filme 6")}
              src={filme6}
              alt="logo"
            />
            <p>{filme}</p>
          </div>
        </section>
      </main>
    </>
  );
}
