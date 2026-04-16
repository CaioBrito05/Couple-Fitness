import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Ranking() {
    const anoAtual = new Date().getFullYear();

    return (
        <>
            <Navbar />

            <main>
                <section className='py-5 text-center container '>
                    <div className='row py-lg-5'>
                        <div className='col-lg-6 col-md-8 mx-auto'>
                            <h1 className='fw-light'>Couple Fitness + 1</h1>
                            <p className='lead text-body-secondary'>WIP</p>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />
        </>
    )
}

export default Ranking