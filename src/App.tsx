import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Practice from './Practice';
import ApiService from './Services/ApiService';

function App() {

let birds = ApiService()
birds.then(results => {return results.data}).then(result => {result.map((entity : any) => {console.table(entity)})})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
