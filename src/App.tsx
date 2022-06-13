import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './App.scss';
import apiService from './services/apiService'

function App() {

  async function apiService() : Promise<any> {
    let response = await fetch(process.env.REACT_APP_API_URL + '/birds')
    const birdData = await response.json()
    return birdData
}
let string = ''
let bird = apiService()
bird.then(results => {
  return results.data})
  .then(result => {
    result.map((entity: any) =>{
      console.table(entity)
      string += entity.name + ', '
     })
     console.log(string)
  })
  return (
    <React.StrictMode>
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
    </React.StrictMode>
  );
}

export default App;
