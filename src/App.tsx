import './App.scss';
import ActionButton from './Atoms/ActionButton';
import Card from './Atoms/Card';
import CloudGraphic from './Atoms/CloudGraphic';
import DuckGraphic from './Atoms/DuckGraphic';
import Header from './Atoms/Header';
import NavButton from './Atoms/NavButton';
import ApiService from './Services/ApiService';
import EntityCard from './Molecules/EntityCard';

function App() {

let birds = ApiService()
birds.then(results => {return results.data}).then(result => {result.map((entity : any) => {console.table(entity)})})

  return (
    <>
      <Header/>
      <DuckGraphic/>
      <CloudGraphic opposite={true}/>
      <ActionButton action={'Five'}/>
      {/* <Card/> */}
      <NavButton direction={'up'}/>
      <NavButton direction={'down'}/>

    </>
  );
}

export default App;
