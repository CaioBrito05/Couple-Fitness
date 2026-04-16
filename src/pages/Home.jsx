import { useState, useEffect } from 'react'
import { doc, updateDoc, increment, onSnapshot, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {

  const [data, setData] = useState(new Date());

  const [participantes, setParticipantes] = useState([]);

  const [anoAtual, setAnoAtual] = useState(data.getFullYear());

  const [mesAtual, setMesAtual] = useState(data.getMonth());

  const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const banco = "participantes"; // Se quiser mudar para o banco de dev coloque participantes_dev

  const treinar = async (id, btn) => {

    const participante = participantes.find(p => p.id === id);

    if (!participante)
      return;

    const atual = Number(participante.treinos);

    if (btn === '+' && atual >= diasNoMes)
      return;

    if (btn === '-' && atual <= 0)
      return;

    const ref = doc(db, banco, id);

    await updateDoc(ref, {
      treinos: increment(btn === '+' ? 1 : -1),
      ...(btn === '+' && { dataTreino: serverTimestamp() })
    })

    // recarrega dados
    const querySnapshot = await getDocs(collection(db, banco));
    const lista = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setParticipantes(lista);
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, banco),
      (snapshot) => {
        const lista = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setParticipantes(lista);
      }
    );


    return () => unsubscribe();
  }, []);

  const ranking = Array.isArray(participantes)
    ? [...participantes].sort((a, b) => Number(b.treinos) - Number(a.treinos))
    : [];

  return (
    <>
      <Navbar />

      <main>
        <section className='py-5 text-center container '>
          <div className='row py-lg-5'>
            <div className='col-lg-6 col-md-8 mx-auto'>
              <h1 className='fw-light'>Couple Fitness + 1</h1>
              <p className='lead text-body-secondary'>Sistema oficial anti-migué da academia 💪😂 Aqui não tem "vou amanhã" nem "tô focado" sem prova — ou registrou, ou não treinou! De quebra, ainda rola aquela competição saudável pra ver quem tá monstro e quem tá só pagando mensalidade</p>
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
              {
                participantes.map((p) => {
                  return (
                    <div className="col" key={p.id}>
                      <div className="card shadow-sm">
                        <img src={`/${p.nome}.jpg`} alt={p.nome} className="card-img-top object-fit-cover" />
                        <div className="card-body">
                          <p className="card-text">{p.nome}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className='btn-group'>
                              <button className='btn btn-primary d-inline-flex align-items-center' onClick={() => treinar(p.id, '+')} disabled={p?.treinos >= diasNoMes}>+1</button>
                              <button className='btn btn-outline-secondary' onClick={() => treinar(p.id, '-')} disabled={p?.treinos <= 0}>-1</button>
                            </div>
                            <p className="text-body-secondary">{p?.dataTreino
                              ? new Date(p.dataTreino.seconds * 1000).toLocaleString()
                              : ""}</p> {/**Aqui você pode colocar a hora e dia que ele apertou */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className='container my-5' id='progresso'>
          <div className='p-5 text-center bg-body-tertiary rounded-3'>
            <h1 className='text-body-emphasis'>Progresso</h1>
            <br />
            {
              ranking.map((p, index) => {
                const porcentagem = Math.min((p.treinos / diasNoMes) * 100, 100);

                return (
                  <div key={p.id}>
                    <p>
                      {p.nome}
                      {index === 0 && " 👑"} {/* Coroa pro primeiro */}
                      {index === ranking.length - 1 && " 🗑️"} {/* Lixo pro último */}
                    </p>

                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        style={{ width: `${porcentagem}%` }}
                      >
                        {p.treinos}/{diasNoMes}
                      </div>
                    </div>
                    <br />
                  </div>
                );
              })
            }
          </div>
        </div>
      </main>

      <Footer />

    </>
  )
}

export default Home
