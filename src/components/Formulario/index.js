import './Formulario.css'
import Inputs from '../Inputs'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

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
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('')
    
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <Inputs 
                    aoAlterado={valor => setNome(valor)}
                    valor={nome}
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                />
                <Inputs 
                    aoAlterado={valor => setCargo(valor)}
                    valor={cargo}
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    
                />
                <Inputs 
                    aoAlterado={valor => setImagem(valor)}
                    valor={imagem}
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario