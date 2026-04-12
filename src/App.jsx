import { useState, useEffect } from 'react'
import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import caioImg from './assets/caio.jpg';
import maiteImg from './assets/maite.png';
import yalueImg from './assets/yalue.jpeg';
import './App.css'

function App() {
  const [countC, setCountC] = useState(0);
  const [countM, setCountM] = useState(0);
  const [countY, setCountY] = useState(0);

  const [data, setData] = useState(new Date());

  const [participantes, setParticipantes] = useState([]);

  const [mesAtual, setMesAtual] = useState(data.getMonth());

  const [anoAtual, setAnoAtual] = useState(data.getFullYear());

  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  async function treinar(id, btn) {
    const ref = doc(db, "participantes", id);

    if (btn === '+') {
          await updateDoc(ref, {
        treinos: increment(1)
      });
    }
    else {
      await updateDoc(ref, {
        treinos: increment(-1)
      });
    }
    

    // recarrega dados
    const querySnapshot = await getDocs(collection(db, "participantes"));
    const lista = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setParticipantes(lista);
  }

  useEffect(() => {
    async function carregar() {
      const querySnapshot = await getDocs(collection(db, "participantes"));

      const lista = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setParticipantes(lista);
    }

    carregar();
  }, []);

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
              <p className='lead text-body-secondary'>Sistema oficial anti-migué da academia 💪😂 Aqui não tem ‘vou amanhã’ nem ‘tô focado’ sem prova — ou registrou, ou não treinou! De quebra, ainda rola aquela competição saudável pra ver quem tá monstro e quem tá só pagando mensalidade</p>
              <p>
                <a href="#competidores" className="btn btn-primary my-2">Competidores</a> <a href="#progresso" className="btn btn-secondary my-2">Progresso</a>
              </p>
            </div>
          </div>
        </section>

        <div className='album py-5 bg-body-tertiary' id='competidores'>
          <div className='container' >
            <p className='lead text-body-secondary'>Edição mês de <strong>{meses[mesAtual]}</strong></p>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
              <div className="col">
                <div className="card shadow-sm">
                  <img src={caioImg} alt="Caio" className="card-img-top object-fit-cover" />
                  <div className="card-body">
                    <p className="card-text">Caio</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className='btn-group'>
                        <button className='btn btn-primary d-inline-flex align-items-center' onClick={() => treinar("caio", '+')}>+1</button>
                        <button className='btn btn-outline-secondary' onClick={() => treinar("caio", '-')}>-1</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small> {/**Aqui você pode colocar a hora e dia que ele apertou */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src={maiteImg} alt="Caio" className="card-img-top object-fit-cover" />
                  <div className="card-body">
                    <p className="card-text">Maitê</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className='btn-group'>
                        <button className='btn btn-primary d-inline-flex align-items-center' onClick={() => treinar("maitê", '+')}>+1</button>
                        <button className='btn btn-outline-secondary' onClick={() => treinar("maitê", '-')}>-1</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src={yalueImg} alt="Caio" className="card-img-top object-fit-cover" />
                  <div className="card-body">
                    <p className="card-text">Yaluê</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className='btn-group'>
                        <button className='btn btn-primary d-inline-flex align-items-center' onClick={() => treinar("yaluê", '+')}>+1</button>
                        <button className='btn btn-outline-secondary' onClick={() => treinar("yaluê", '-')}>-1</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container my-5' id='progresso'>
          <div className='p-5 text-center bg-body-tertiary rounded-3'>
            <h1 className='text-body-emphasis'>Progresso</h1>
            <br />
            {participantes.map(p => (
              <div key={p.id}>
                <p>{p.nome}</p>

                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: `${p.treinos}%` }}
                  >
                    {p.treinos}%
                  </div>
                </div>

                <br />
              </div>
            ))}
          </div>
        </div>
      </main>


      <footer className='py-3 my-4'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'>
            <a href="#" className='nav-link px-2 text-body-secondary'>Home</a>
          </li>
        </ul>
        <p className='text-center text-body-secondary'>© {anoAtual} CB</p>
      </footer>

    </>
  )
}

export default App
