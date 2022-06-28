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
      <EntityCard birdName={'pecker'} imageRef={'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'} statType={'entityCard'} strength={10} intelligence={4} origin={'Bahamas'} details={'Lorem Ipsum Only Able To Be Able To Write A Max Of X Characters for the front of the card but it does seem pretty adaptable for what I need it for as it just pushes the image up and up; undoubtedly though there will be an amount that would push the content outside of the parent'}/>

    </>
  );
}

export default App;
