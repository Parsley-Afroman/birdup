import { useState } from 'react';
import './App.scss';
import HomePage from './Pages/HomePage';

function App() 
{
  // controls the controller method and changes the fetch method for rendering the page (not required without routing)
  const [method, setMethod] : [string, Function] = useState('all');
  return (
    <>
      <HomePage method={method}/>
      {/* the footer is so the navigation button goes to the bottom of the page */}
      <footer id='footer'></footer>
    </>
  )
}
export default App;