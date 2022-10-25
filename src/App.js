import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState } from 'react'

export default function App(props) {

  const [nome , setNome]= useState("Joana")
  
  return (
    <div className="App">
      <GlobalStyled />

      <Garagem 
      nome={nome}
      setNome= {setNome}
    
      />
    </div>
  )
}
