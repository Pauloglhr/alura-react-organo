import './Formulario.css'
import Inputs from '../Inputs'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <Inputs label="Nome" placeholder="Digite o seu nome"/>
                <Inputs label="Cargo" placeholder="Digite o seu cargo"/>
                <Inputs label="Imagem" placeholder="Informe o endereço da imagem"/>
            </form>
        </section>
    )
}

export default Formulario