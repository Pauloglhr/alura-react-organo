import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import './Colaborador.css';

const Colaborador = ({ nome, cargo, imagem, corDeFundo, aoDeletar, id, favorito, mudarFavorito }) => {
    return(
        <div className='colaborador'>
            <IoIosCloseCircle 
                className='deletar' 
                onClick={()=> aoDeletar(id)} 
                size={25}
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favoritar">
                    {
                        favorito
                        ? <MdOutlineFavorite onClick={() => mudarFavorito(id)} size={25} color="FF0000"/>
                        : <MdOutlineFavoriteBorder onClick={() => mudarFavorito(id)} size={25}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Colaborador;