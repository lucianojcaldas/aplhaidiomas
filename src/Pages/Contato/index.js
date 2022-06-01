import './styles.css';

const Contato = () => {
    return(
        <div className="container-contato">
            <form>
                <input placeholder="digite o nome" />
                <input placeholder="digite o email" />
                <input placeholder="(XX-XXXXXXXX)" />
                <input type ="submit" />
            </form>
        </div>
    )
}


export default Contato;