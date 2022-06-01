import Logo from '../../img/undraw_Startup_life_re_8ow9.png'

import './styles.css';

const Home = () => {
    return(
        <main className="container-home">
            <img src={Logo} alt="Logo" />

            <div>
                <h1>Escola de Idiomas APLHA</h1>
                <p> Há 30 anos inspirando pessoas
                    A história do ALPHA pode ser contada em diversos cantos do país e do mundo,
                    por pessoas diferentes que viveram o aprendizado com a metodologia APHA.</p>
                    
                 <p>Metodologia própria:
                    Na ALPHA, você aprende naturalmente: primeiro, ouvindo, entendendo e falando; depois, lendo e, então, escrevendo.</p>

                  <p>Excelência com resultados: 
                    Nossos alunos conquistaram a maior média Brasil no TOEFL® ITP,
                    uma das principais certificações internacionais da língua inglesa.
                    Na APLHA, o exame é gratuito ao final do curso.</p>
                <button>Acessar Serviços</button>
            </div>
        </main>
    )
}


export default Home;