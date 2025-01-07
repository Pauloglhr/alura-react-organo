import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = ({time, colaboradores, aoDeletar, mudarCor, mudarFavorito}) =>{
    return(
        (colaboradores.length > 0) ? <section className='time' style={{backgroundColor: hexToRgba(time.cor, '0.6')}}>
            <input onChange={evento => mudarCor(evento.target.value, time.id)} value={time.cor} type='color' className='cor'></input>
            <h3 style={{borderColor: time.cor}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador 
                            id={colaborador.id}
                            key={colaborador.nome}
                            corDeFundo={time.cor}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            favorito={colaborador.favorito}
                            aoDeletar={aoDeletar}
                            mudarFavorito={mudarFavorito}
                        />
                    )
                })}
            </div>
        </section>
        : ''
    );
};

export default Time;