import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57c278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82cffa',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#a6d157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#e06b69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#db6ebf',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#ffba05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#ff8a29',
    }
  ]);

  const aoNovoColaboradorCadastrado = (colaborador)=>{
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaborador);
    
  }

  const deletarColaborador = (id) =>{
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const aoMudarDeCor = (cor, id) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  const cadastrarTime = (novoTime) => {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}
        cadastrarTime={cadastrarTime}
      />
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
