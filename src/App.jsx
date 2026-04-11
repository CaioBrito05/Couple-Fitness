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
      <header>
        <div className='navbar navbar-dark bg-dark shadow-sm'>
          <div className='container'>
            <a href="#" className='navbar-brand d-flex align-items-center'>Couple Fitness + 1</a>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
              aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className='py-5 text-center container'>
          <div className='row py-lg-5'>
            <div className='col-lg-6 col-md-8 mx-auto'>
              <h1 className='fw-light'>Couple Fitness + 1</h1>
              <p className='lead text-body-secondary'>Teste teste</p>
              <p> <a href="#" class="btn btn-primary my-2">Primeiro</a> <a href="#" class="btn btn-secondary my-2">Segundo</a> </p>
            </div>
          </div>
        </section>

        <div className='album py-5 bg-body-tertiary'>
          <div className='container'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
              <div class="col">
                <div class="card shadow-sm">
                  <svg aria-label="Placeholder: Caio" class="bd-placeholder-img card-img-top" height="225"
                    preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Caio</text>
                  </svg>
                  <div class="card-body">
                    <p class="card-text">Contador de Treinos do Caio:</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <button className='btn btn-primary d-inline-flex align-items-center'>Contador</button>
                      <small class="text-body-secondary">9 mins</small> {/**Aqui você pode colocar a hora e dia que ele apertou */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <svg aria-label="Placeholder: Thumbnail" class="bd-placeholder-img card-img-top" height="225"
                    preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Maitê</text>
                  </svg>
                  <div class="card-body">
                    <p class="card-text">Contador de Treinos Maitê</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <button className='btn btn-primary d-inline-flex align-items-center'>Contador</button>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <svg aria-label="Placeholder: Thumbnail" class="bd-placeholder-img card-img-top" height="225"
                    preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Yaluê</text>
                  </svg>
                  <div class="card-body">
                    <p class="card-text">Contador de Treinos Yaluê:</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <button className='btn btn-primary d-inline-flex align-items-center'>Contador</button>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default App
