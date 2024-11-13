import './Formulario.css'
import Inputs from '../Inputs'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('O formulário foi submetido.');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <Inputs obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
                <Inputs obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"/>
                <Inputs label="Imagem" placeholder="Informe o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario