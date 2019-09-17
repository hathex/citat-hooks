import React, { useState } from 'react';
import './App.css';
import OpretCitat from './components/OpretCitat';
import CitatListe from './components/CitatListe';

function App() {

  //state
  const [citater, setCitater] = useState([
    { forfatter: 'Living ', citattxt: '"The greatest glory in living lies not in never falling, but in rising every time we fall."', forfatter: '-Nelson Mandela', id: 1 },
    { forfatter: 'Communication', citattxt: '"The way to get started is to quit talking and begin doing."', forfatter: '-Walt Disney', id: 2 },
    { forfatter: 'Live your life ', citattxt: '"Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking."', forfatter: '-Steve Jobs', id: 3 },
    { forfatter: 'Life ', citattxt: '"If life were predictable it would cease to be life, and be without flavor."', forfatter: '-Eleanor Roosevelt', id: 4 },
    { forfatter: 'always want more', citattxt: '"If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough."', forfatter: '-Oprah Winfrey', id: 5 },
    { forfatter: 'Success', citattxt: '"If you set your goals ridiculously high and its a failure, you will fail above everyone elses success."', forfatter: '-James Cameron', id: 6 }
  ]);


  //Oprette citat
  const opretCitat = (nytCitat) => {
    nytCitat.id = Math.floor(Math.random() * 1000);
    setCitater([...citater, nytCitat]);
  };

  //slette citat
  const sletCitat = (id) => {
    setCitater(citater.filter(c => c.id !== id));
  };


  return (
    <div className="App">
      <CitatListe alleCitaterProp={citater} sletCitaterProp={sletCitat} />
      <OpretCitat opretCitatProp={opretCitat} />
    </div>
  );
}

export default App;