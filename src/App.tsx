import './App.scss';
import ActionButton from './Atoms/ActionButton';
import Card from './Atoms/Card';
import Header from './Atoms/Header';
import ApiService from './Services/ApiService';

function App() {

let birds = ApiService()
birds.then(results => {return results.data}).then(result => {result.map((entity : any) => {console.table(entity)})})

  return (
    <>
      <Header classNameValue={'front'}/>
      <Header classNameValue={'back'}/>
      <ActionButton action={'Five'}/>
      <Card/>
    </>
  );
}

export default App;
