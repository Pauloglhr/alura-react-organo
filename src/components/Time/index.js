import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({time, colaboradores, aoDeletar}) =>{
    return(
        (colaboradores.length > 0) ? <section className='time' style={{backgroundColor: time.corSecundaria}}>
            <h3 style={{borderColor: time.corPrimaria}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador 
                    key={colaborador.nome}
                    corDeFundo={time.corPrimaria}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    aoDeletar={aoDeletar}
                />
                })}
            </div>
        </section>
        : ''
    );
};

export default Time;