import './App.scss';
import ActionButton from './Atoms/ActionButton';
import ApiService from './Services/ApiService';

function App() {

let birds = ApiService()
birds.then(results => {return results.data}).then(result => {result.map((entity : any) => {console.table(entity)})})

  return (
    <>
      <ActionButton action={'Five'}/>
    </>
  );
}

export default App;
