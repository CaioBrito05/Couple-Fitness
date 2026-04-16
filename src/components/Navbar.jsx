import { Link } from "react-router-dom"

function Navbar() {
    return (
        <header>
            <div className='navbar navbar-dark bg-dark shadow-sm'>
                <div className='container'>
                    <Link to="/" className='navbar-brand d-flex align-items-center'>Couple Fitness + 1</Link>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
                        aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar