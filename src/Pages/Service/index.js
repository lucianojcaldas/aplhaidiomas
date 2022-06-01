import Service from '../../Components/Service';

import './styles.css';

const Services = () => {
    return(
        <div className='container-services'>
            <Service name = "Servico limpeza" /> 
            <Service name = "Servico Escritorio" />
            <Service name = "Servico RH" />
            <Service /> 
            <Service /> 
            <Service /> 
            <Service /> 
        </div>
    )
}


export default Services;