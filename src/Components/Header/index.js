import {Link} from 'react-router-dom';
import './styles.css';

const Header = () => {
    return(
        <main className = "container-main">
            <h1>Alpha Escola de Idiomas</h1>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Service">Service</Link></li>
                <li><Link to="/Contato">Contato</Link></li>
            </ul>
        </main>
      
        )
    }


export default Header;