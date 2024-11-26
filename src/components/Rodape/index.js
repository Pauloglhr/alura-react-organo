import './Rodape.css';

const Rodape = () =>{
    return(
        <footer className='footer'>
            <div>
                <img src='/assets/fb.png' alt='Ícone do facebook'></img>
                <img src='/assets/tw.png' alt='Ícone do twitter'></img>
                <img src='/assets/ig.png' alt='Ícone do instagram'></img>
            </div>
            <img src='/assets/logo.png' alt='Logo do organo'></img>
            <h6>Desenvolvido por Alura.</h6>
        </footer>
    );
};

export default Rodape;