import './App.scss';
import ActionButton from './Atoms/ActionButton';
import CloudGraphic from './Atoms/CloudGraphic';
import DuckGraphic from './Atoms/DuckGraphic';
import Header from './Atoms/Header';
import NavButton from './Atoms/NavButton';
import EntityCard from './Molecules/EntityCard';
import CardArray from './Organisms/CardArray';

function App() {
  return (
    <>
      <Header/>
      <DuckGraphic/>
      <CloudGraphic opposite={true}/>
      <ActionButton action={'Five'}/>
      <NavButton direction={'up'}/>
      <NavButton direction={'down'}/>
      <EntityCard birdName={'pecker'} imageRef={'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'} statType={'entityCard'} strength={10} intelligence={4} origin={'Bahamas'} details={'Lorem Ipsum Only Able To Be Able To Write A Max Of X Characters for the front of the card but it does seem pretty adaptable for what I need it for as it just pushes the image up and up; undoubtedly though there will be an amount that would push the content outside of the parent'}/>
      <CardArray />
    </>
  );
}

export default App;
