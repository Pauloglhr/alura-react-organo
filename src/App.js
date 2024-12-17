
import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57c278',
    },
    {
      nome: 'Front-End',
      cor: '#82cffa',
    },
    {
      nome: 'Data Science',
      cor: '#a6d157',
    },
    {
      nome: 'Devops',
      cor: '#e06b69',
    },
    {
      nome: 'UX e Design',
      cor: '#db6ebf',
    },
    {
      nome: 'Mobile',
      cor: '#ffba05',
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#ff8a29',
    }
  ]);

  const aoNovoColaboradorCadastrado = (colaborador)=>{
    setColaboradores([...colaboradores, colaborador]);
  }

  const deletarColaborador = () =>{
    console.log('deletando colaborador...');
  }

  const aoMudarDeCor = (cor, nome) => {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}/>
      {times.map(time => 
        <Time 
          mudarCor={aoMudarDeCor}
          key={time.nome}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />)
      }
      <Rodape />
    </div>
  );
}

export default App;
