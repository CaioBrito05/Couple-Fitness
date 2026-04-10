import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [countC, setCountC] = useState(0);
  const [countM, setCountM] = useState(0);
  const [countY, setCountY] = useState(0);

  const [data, setData] = useState(new Date());

  const [mesAtual, setMesAtual] = useState(data.getMonth());

  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Couple Fitness + 1</h1>
          <p>
            Contador de vezes que fomos na academia
          </p>
          <h2>
            Edição Mês de {meses[mesAtual]}
          </h2>
        </div>

      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="contadores">
          <div id="">
            <h2>Caio</h2>
            <button
              className="counter"
              onClick={() => setCountC((countC) => countC + 1)}
            >
              Count is {countC}
            </button>
          </div>
          <div>
            <h2>Maitê</h2>
            <button
              className="counter"
              onClick={() => setCountM((countM) => countM + 1)}
            >
              Count is {countM}
            </button>
          </div>
          <div>
            <h2>Yaluê</h2>
            <button
              className="counter"
              onClick={() => setCountY((countY) => countY + 1)}
            >
              Count is {countY}
            </button>
          </div>


        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
