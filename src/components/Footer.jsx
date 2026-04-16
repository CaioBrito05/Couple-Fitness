import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
    const [data, setData] = useState(new Date());

    const [anoAtual, setAnoAtual] = useState(data.getFullYear());

    return (
        <footer className='py-3 my-4'>
            <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                <li className='nav-item'>
                    <Link to="/" className='nav-link px-2 text-body-secondary'>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/ranking" className='nav-link px-2 text-body-secondary'>
                        Ranking
                    </Link>
                </li>
            </ul>
            <p className='text-center text-body-secondary'>
                © {anoAtual} CB
            </p>
        </footer>
    )
}

export default Footer