import { useState } from 'react'
import caioImg from './assets/caio.jpg';
import maiteImg from './assets/maite.png';
import yalueImg from './assets/yalue.jpeg';
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
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
              aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className='py-5 text-center container '>
          <div className='row py-lg-5'>
            <div className='col-lg-6 col-md-8 mx-auto'>
              <h1 className='fw-light'>Couple Fitness + 1</h1>
              <p className='lead text-body-secondary'>Teste teste</p>
              <p> <a href="#" className="btn btn-primary my-2">Primeiro</a> <a href="#" className="btn btn-secondary my-2">Segundo</a> </p>
            </div>
          </div>
        </section>

        <div className='album py-5 bg-body-tertiary'>
          <div className='container'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
              <div className="col">
                <div className="card shadow-sm">
                  <img src={caioImg} alt="Caio" className="card-img-top object-fit-cover" />
                  <div className="card-body">
                    <p className="card-text">Contador de Treinos do Caio:</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <button className='btn btn-primary d-inline-flex align-items-center'>Contador</button>
                      <small className="text-body-secondary">9 mins</small> {/**Aqui você pode colocar a hora e dia que ele apertou */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src={maiteImg} alt="Caio" className="card-img-top object-fit-cover" />
                  <div className="card-body">
                    <p className="card-text">Contador de Treinos Maitê</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <button className='btn btn-primary d-inline-flex align-items-center'>Contador</button>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src={yalueImg} alt="Caio" className="card-img-top object-fit-cover" />
                  <div className="card-body">
                    <p className="card-text">Contador de Treinos Yaluê:</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <button className='btn btn-primary d-inline-flex align-items-center'>Contador</button>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className='py-3 my-4'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'>
            <a href="#" className='nav-link px-2 text-body-secondary'>Home</a>
          </li>
        </ul>
        <p className='text-center text-body-secondary'>© 2026 Caio</p>
      </footer>

    </>
  )
}

export default App
