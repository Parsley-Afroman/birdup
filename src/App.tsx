import { useState } from 'react';
import './App.scss';
import FormInput from './Atoms/FormInput';
import Modal from './Atoms/Modal';
import HomePage from './Pages/HomePage';
import ApiService from './Services/ApiService';

function App() {
  const [method, setMethod] : [string, Function] = useState('all');
  // let form = ApiService.PostApiService.CreateSingleBird();
  return (
    <>
      
      <HomePage method={method}/>
      {/* currently this form goes directly to the route without any sanitisation
      recommend: prevent default on form; collect form POST data; sanitise and validate data
      followed up with: inserting the checked data into a function to insert into */}
      <footer id='footer'></footer>
    </>
  );
}
export default App;