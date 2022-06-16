import React from 'react';
import ActionBtn from './Atoms/ActionBtn';
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
     
        {<ActionBtn action={'yeah'}/>}
      
    </div>
    </React.StrictMode>
  );
}

export default App;
