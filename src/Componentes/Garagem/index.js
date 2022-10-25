
import { Carro } from '../Carro'
import { useState } from 'react'
import { Botao,  Estacionamento, GaragemContainer } from './styles'

export function Garagem({ nome, setNome ,alteraCarro }) {

  const [automovel, setAutomovel] = useState({
    modelo: "Corsa",
    cor: "Branco",
    ano: 2020,
    flex: true
  })

  const automovel1 = {

    modelo: "Fusca",
    cor: "Preto",
    ano: 2020,
    flex: true
  }

  const automovel2 = {

    modelo: "Ferrari",
    cor: "Vermelha",
    ano: 2020,
    flex: true
  }


  const automovel3 = {

    modelo: "Uno",
    cor: "Verde",
    ano: 2020,
    flex: true
  }


  function mudaNome(nome) {
    setNome(nome)

  }

  function mudaCarro (objeto){
    setAutomovel(objeto)
  }

  return (

    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={() => mudaNome("barbosa")}>Muda nome</Botao>
      <Botao onClick={() => alteraCarro(automovel1)}>Muda carro</Botao>

      <Estacionamento>

      <Carro
          automovel={automovel}
          setAutomovel={setAutomovel}
          adicionadoPor={nome}
          outroCarro={automovel2}
         


        />


        <Carro
          automovel={automovel}
          setAutomovel={setAutomovel}
          adicionadoPor={nome}
          outroCarro={automovel2}
          outroCarro1={automovel1}


        />


        <Carro
          automovel={automovel}
          setAutomovel={setAutomovel}
          adicionadoPor={nome}
          outroCarro={automovel3}


        />


      </Estacionamento>
    </GaragemContainer>
  )
}
