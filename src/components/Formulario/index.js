import './Formulario.css'
import Inputs from '../Inputs'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        })
        setNome('');
        setCargo('');
        setImagem('');
    }

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    
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
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
            <form onSubmit={(evento => {
                evento.preventDefault();
                props.cadastrarTime({nome: nomeTime, cor: corTime})
                setNomeTime('')
                setCorTime('')
            })}>
                <h2>Preencha os dados para criar um novo time:</h2>
                <Inputs 
                    aoAlterado={valor => setNomeTime(valor)}
                    valor={nomeTime}
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do time"
                />
                <Inputs 
                    aoAlterado={valor => setCorTime(valor)}
                    valor={corTime}
                    obrigatorio={true} 
                    label="Cor" 
                    placeholder="Cor"
                />
                <Botao>
                    Criar novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario