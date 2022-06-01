import Serv from '../../img/undraw_Golden_gate_bridge_re_e8tc.png';
import './styles.css';

const Service = ({ name = "Servico sem nome" }) => {

    return (
        <div className="container-service">
          <img src={Serv} alt ="Service" />
          <p>{name}</p>
        </div>
    )
}

export default Service ;