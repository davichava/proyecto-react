import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar';
// import Header from './components/header';
// import Footer from './components/footer';




function App() {

  const fetchCharacters = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

  }


  return (
      <Navbar brand="Pokemon" /> 
  //     <Header />,
  //     <Footer />
   );
}

export default App;
