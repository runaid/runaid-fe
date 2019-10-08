import React from 'react';
import logo from './logo.svg';
import './App.css';

type WithName = { name: String, bame: String }

const App: React.FC<WithName> = (obj) => {
  console.log(obj.name)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. {obj.name} {obj.bame}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
