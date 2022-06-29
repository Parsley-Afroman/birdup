import { useState } from 'react';
import './App.scss';
import HomePage from './Pages/HomePage';

function App() {
  const [method, setMethod] = useState('all')
  return (
    <>
      <HomePage method={method}/>
      <footer id='footer'></footer>
    </>
  );
}

export default App;
